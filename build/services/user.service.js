"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = __importDefault(require("../Database/models/UserModel"));
const md5_1 = __importDefault(require("md5"));
const jwt_1 = require("../jwt/jwt");
const resp_1 = require("../utils/resp");
const schema_1 = __importDefault(require("./validations/schema"));
class UserService {
    constructor() {
        this.User = UserModel_1.default;
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.User.findAll({
                    limit: 15,
                    order: [["DataCriacao", "DESC"]],
                });
                return (0, resp_1.resp)(200, users);
            }
            catch (error) {
                return (0, resp_1.resp)(500, error);
            }
        });
    }
    login(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashPassword = (0, md5_1.default)(body.password);
            try {
                const user = yield this.User.findOne({
                    where: { Email: body.email, Senha: hashPassword },
                });
                if (!user)
                    return (0, resp_1.respM)(404, { message: "user not found" });
                const { Id, Email } = user;
                const token = (0, jwt_1.sign)({ id: Id, email: Email });
                return (0, resp_1.resp)(200, { Id, Email, token });
            }
            catch (error) {
                return (0, resp_1.resp)(500, error);
            }
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = schema_1.default.user.validate(user);
                if (error)
                    return (0, resp_1.respM)(422, { message: error.details[0].message });
                const hashPassword = (0, md5_1.default)(user.Senha);
                const newUser = yield this.User.create(Object.assign(Object.assign({}, user), { Senha: hashPassword }));
                return (0, resp_1.resp)(201, newUser);
            }
            catch (error) {
                return (0, resp_1.resp)(500, error);
            }
        });
    }
}
exports.default = UserService;
