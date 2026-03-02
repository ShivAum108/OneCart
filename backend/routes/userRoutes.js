import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { getAdmin, getCurrentUser } from "../controllers/userControllers.js";
import adminAuth from "../middlewares/adminAuth.js";


const userRouter = express.Router();

userRouter.get("/currentuser", isAuth, getCurrentUser);
userRouter.get("/getadmin", adminAuth, getAdmin);

export default userRouter;