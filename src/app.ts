import express, { NextFunction, Request, Response }  from "express";
import cors from "cors";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(cors());

console.log("alou")

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({
        status: 500,
        message: err.message,
    });
})
export default app;