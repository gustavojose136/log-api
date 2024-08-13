import { Router } from "express";
import userRouter from "./userRouter";
import TestController from "../controller/test.controller";

const router = Router();

const testController = new TestController();


router.use(userRouter);

router.get('/test', (req, res, next) => testController.test(req, res, next));


export default router;