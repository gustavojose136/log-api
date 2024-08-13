"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const joi_1 = __importDefault(require("joi"));
const user = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(4).required(),
});
module.exports = { user };
