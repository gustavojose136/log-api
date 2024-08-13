import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

class TestController {
    async test(req: Request, res: Response, next: NextFunction) {
        try {
            logger.info('Iniciando o método test');
            res.send('Teste concluído com sucesso');
        } catch (error) {
            logger.error('Erro no método test', { error });
            next(error);
        }
    }
}

export default TestController;
