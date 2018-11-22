import MessageController from '../controllers/MessageController';
import { Router } from 'express';
/**
 * @class UserRouter
 */
export default class MessageRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        this.router.post('/', MessageController.sendMessage);
        this.router.get('/ports', MessageController.requestOpenPorts);
        this.router.post('/savePorts', MessageController.saveOpenPorts);
        this.router.get('/getMessages', MessageController.getMessages);
    }
}