import  Jwt, { SignOptions }  from "jsonwebtoken";
import 'dotenv/config'
import { NextFunction, Request, Response } from "express";

const secret = process.env.JWT_SECRET as string;

const sign = (payload: { id: string, email: string}, expiresIn = "5h") => {
    const jwtConfig: SignOptions = {
        algorithm: 'HS256',
        expiresIn
    };

    return Jwt.sign(payload, secret, jwtConfig);
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization;

        if(!token) return res.status(401).json({message: "Unauthorized"});

        const decoded = Jwt.verify(token, secret);
        res.locals.user = decoded;
        next();
    } catch (error) {
       next(error);
    }
}

export {
    sign,
    verifyToken
}