import { ModelStatic } from "sequelize";
import User from "../Database/models/UserModel";
import md5 from "md5";
import { sign } from "../jwt/jwt";
import { resp, respM } from "../utils/resp";
import IUser from "../interfaces/IUser";
import schema from "./validations/schema";
class UserService {
  private User: ModelStatic<User> = User;

  async getUsers() {
    try {
      const users = await this.User.findAll({
        limit: 15,
        order: [["DataCriacao", "DESC"]],
      });

      return resp(200, users);
    } catch (error) {
      return resp(500, error);
    }
  }

  async login(body: { email: string; password: string }) {
    const hashPassword = md5(body.password);

    try {
      const user = await this.User.findOne({
        where: { Email: body.email, Senha: hashPassword },
      });

      if (!user) return respM(404, { message: "user not found" });

      const { ID, Email } = user;

      const token = sign({ id: ID, email: Email });
      return resp(200, { ID, Email, token });
    } catch (error) {
      return resp(500, error);
    }
  }

  async createUser(user: IUser) {
    try {
      const { error } = schema.user.validate(user);

      if (error) return respM(422, { message: error.details[0].message });

      const hashPassword = md5(user.Senha!);
      const newUser = await this.User.create({ ...user, Senha: hashPassword });

      return resp(201, newUser);
    } catch (error) {
      return resp(500, error);
    }
  }
}

export default UserService;
