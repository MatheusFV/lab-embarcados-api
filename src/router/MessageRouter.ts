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
        this.router.post('/', MessageController.receiveMessage);
    }
}