import { Router } from "express";
import UserController from "../controller/user.controller";
import { verifyToken } from "../jwt/jwt";
import TestController from "../controller/test.controller";

const control = new UserController();


const userRouter = Router();

userRouter.get("/user", control.getUsers);

userRouter.post("/login", control.login);

userRouter.post("/user", verifyToken,control.createUser);

export default userRouter;