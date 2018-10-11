import * as express from 'express';
import * as fs from 'fs';

class MessageController {
    public sendMessage(req: express.Request, res: express.Response, next: express.NextFunction): void {
        if (req.body.message == undefined) { res.status(400).json({ error: 'Field message is empty' }); }
        if (!req.body.body == undefined) { res.status(400).json({ error: 'Field message is empty' }); }
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
        fs.readFile('ports.txt', (err: any, value: any) => {
            console.log(value)
            res.status(200).json(JSON.parse(value));
        });
    }

    public saveOpenPorts(req: express.Request, res: express.Response, next: express.NextFunction): void {
        fs.writeFile('ports.txt', JSON.stringify({ ports: [100, 200, 300, 400, 500] }) , (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('sucesso');
            }
        });
    }
}

export default new MessageController();