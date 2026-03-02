import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  try {
    let token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    console.log("token error", error);
  }
};

export default generateToken;

export const genTokenAdmin = (email) => {
  try {
    let token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    console.log(`admin generate token error:  ${error}`);
  }
};
