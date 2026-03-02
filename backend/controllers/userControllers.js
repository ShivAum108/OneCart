import User from "../models/userModel.js";

export const getCurrentUser = async (req, res) => {
  try {
    const id = req.userId;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log("get current user error: ", error);
    return res
      .status(500)
      .json({ message: `get current user error: ${error}` });
  }
};

export const getAdmin = async (req, res) => {
  try {
    const adminEmail = req.adminEmail;
    if (!adminEmail) {
      return res.status(404).json({ message: "admin not found" });
    }
    return res.status(201).json({
      email: adminEmail,
      role: "admin",
    });
  } catch (error) {
    console.log(`get admin error: ${error}`);
    return res.status(500).json({ message: `get admin error ${error}` });
  }
};
