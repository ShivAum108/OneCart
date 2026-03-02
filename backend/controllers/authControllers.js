import User from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import generateToken, { genTokenAdmin } from "../config/token.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "user already exists!" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Enter a valid email" });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "password must not be less than 8 characters" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    let token = generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(201).json(user);
  } catch (error) {
    console.log("registration error");
    return res.status(500).json({ message: "registration error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(404).json({ message: "user not found" });
    }
    const isMatch = await bcrypt.compare(password, existUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "incorrect password" });
    }
    let token = generateToken(existUser._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json(existUser);
  } catch (error) {
    console.log("login error");
    return res.status(500).json({ message: `login error ${error}` });
  }
};

export const googleLogin = async (req, res) => {
  try {
    const { name, email } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email, isGoogleUser: true });
    }
    let token = generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json(user);
  } catch (error) {
    console.log("google login error: ", error);
    return res.status(500).json({ message: error.message });
  }
};

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email == process.env.ADMIN_EMAIL &&
      password == process.env.ADMIN_PASSWORD
    ) {
      let token = genTokenAdmin(email);
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "Strict",
        maxAge: 1 * 24 * 60 * 1000,
      });
      return res.status(200).json(token);
    }
    return res.status(400).json({ message: "Invalid credentials" });
  } catch (error) {
    return res.status(500).json({ message: "admin login error" });
  }
};

export const logOut = async (req, res) => {
  try {
    await res.clearCookie("token");
    return res.status(200).json({ message: "logged out successfully" });
  } catch (error) {
    console.log("logout error");
    res.status(500).json({ message: `logout error ${error}` });
  }
};
