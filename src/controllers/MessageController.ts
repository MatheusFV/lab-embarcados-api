import * as express from 'express';

class MessageController {
    public sendMessage(req: express.Request, res: express.Response, next: express.NextFunction): void {
        if (!req.body.message) { res.status(400).json({ error: 'Field message is empty' }); }
        if (!req.body.body) { res.status(400).json({ error: 'Field message is empty' }); }
        // Send message
        res.status(200).json({
            message: 'Messa sent',
            data: {
                message: req.body.message,
                port: req.body.port
            }
        });
    }

    public requestOpenPorts(req: express.Request, res: express.Response, next: express.NextFunction): void {
        res.status(200).json({ ports: [100, 200, 300, 400, 500] });
    }
}

export default new MessageController();