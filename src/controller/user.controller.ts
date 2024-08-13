import { NextFunction, Request, Response } from "express";
import UserService from "../services/user.service";
import logger from '../utils/logger';

class UserController{
    private userService: UserService = new UserService();
    
    async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            logger.info('Iniciando o método para pegar os usuarios');
            const { status, message } = await this.userService.getUsers();

            res.status(status).json(message);
        } catch (error) {
            logger.error('Erro no método para pegar os usuarios', { error });
            next(error);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            logger.info('Iniciando o método de login');
            const { status, message } = await this.userService.login(req.body);

            res.status(status).json(message);
        } catch (error) {
            logger.error('Erro no método de login', { error });
            next(error);
        }
    }

    async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { status, message } = await this.userService.createUser(req.body);

            res.status(status).json(message);
        } catch (error) {
            next(error);
        }
    }
}

export default UserController;