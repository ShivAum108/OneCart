import express from "express";
import { adminLogin, googleLogin, login, logOut, register } from "../controllers/authControllers.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/googlelogin", googleLogin);
authRouter.post("/adminlogin", adminLogin);
authRouter.get("/logout", logOut);

export default authRouter;