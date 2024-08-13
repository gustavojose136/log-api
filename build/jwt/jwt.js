"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.sign = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const secret = process.env.JWT_SECRET;
const sign = (payload, expiresIn = "5h") => {
    const jwtConfig = {
        algorithm: 'HS256',
        expiresIn
    };
    return jsonwebtoken_1.default.sign(payload, secret, jwtConfig);
};
exports.sign = sign;
const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token)
            return res.status(401).json({ message: "Unauthorized" });
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        res.locals.user = decoded;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.verifyToken = verifyToken;
