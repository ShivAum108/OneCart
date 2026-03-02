import jwt from "jsonwebtoken";

export const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(400).json({ message: "no token found" });
    }
    let verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
      return res.status(400).json({ message: "invalid token" });
    }
    req.adminEmail = process.env.ADMIN_EMAIL;
    next();
  } catch (error) {
    console.log(`admin auth error: ${error}`);
    return res
      .status(500)
      .json({ message: `admin auth token error: ${error}` });
  }
};

export default adminAuth;
