import { ModelStatic } from "sequelize";
import User from "../Database/models/UserModel";
import md5 from "md5";
import { sign } from "../jwt/jwt";
import { resp, respM } from "../utils/resp";
import IUser from "../interfaces/IUser";
import schema from "./validations/schema";
import logger from '../utils/logger';

class UserService {
  private User: ModelStatic<User> = User;

  async getUsers() {
    try {
      logger.info('Iniciando o método para pegar os usuarios');

      const users = await this.User.findAll({
        limit: 15,
        order: [["DataCriacao", "DESC"]],
      });

      return resp(200, users);
    } catch (error) {
      logger.error('Erro no método para pegar os usuarios', { error });
      return resp(500, error);
    }
  }

  async login(body: { email: string; password: string }) {
    logger.info('Iniciando o método de login');
    const hashPassword = md5(body.password);

    try {
      logger.debug('Buscando usuário no banco de dados');
      const user = await this.User.findOne({
        where: { Email: body.email, Senha: hashPassword },
      });

      if (!user) return respM(404, { message: "user not found" });

      const { Id, Email } = user;

      const token = sign({ id: Id, email: Email });
      return resp(200, { Id, Email, token });
    } catch (error) {
      logger.error('Erro no método de login', { error });
      return resp(500, error);
    }
  }

  async createUser(user: IUser) {
    try {
      logger.info('Iniciando o método de criar um novo usuário');
      const { error } = schema.user.validate(user);

      if (error) return respM(422, { message: error.details[0].message });

      const hashPassword = md5(user.Senha!);
      const newUser = await this.User.create({ ...user, Senha: hashPassword });

      return resp(201, newUser);
    } catch (error) {
      logger.crit('Erro ao criar um novo usuário', { error });
      return resp(500, error);
    }
  }
}

export default UserService;
