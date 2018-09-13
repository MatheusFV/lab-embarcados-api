import * as express from 'express';
import IServer from '../interfaces/ServerInterface';
import MessageRouter from './MessageRouter';

export default class Routes {
    static init(server: IServer) :void {
        const router: express.Router = express.Router();
        server.app.use('/', router);

        // users

        server.app.use('/v1/message', new MessageRouter().router);
    }
}
