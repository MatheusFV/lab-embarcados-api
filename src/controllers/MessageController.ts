import * as express from 'express';

class MessageController {
    public receiveMessage(req: express.Request, res: express.Response, next: express.NextFunction): void {
        if (req.body.message) {
            res.status(200).json({ message: req.body.message });
        } else {
            res.status(400).json({ error: 'Field message is empty' });
        }
    }
}

export default new MessageController();