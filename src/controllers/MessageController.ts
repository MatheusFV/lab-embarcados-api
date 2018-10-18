import * as express from 'express';
import * as fs from 'fs';

class MessageController {
    public sendMessage(req: express.Request, res: express.Response, next: express.NextFunction): void {
        if (req.body.message == undefined) { res.status(400).json({ error: 'Field message is empty' }); }
        if (!req.body.body == undefined) { res.status(400).json({ error: 'Field message is empty' }); }
        // Send message
        res.status(200).json({
            message: 'Message sent',
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

    public getMessages(req: express.Request, res: express.Response, next: express.NextFunction): void {
        res.status(200).json({
            message: 'Messages',
            data: [
                {
                    message: 'Oi dibua 1',
                    port: 1000
                },
                {
                    message: 'Oi dibua 2',
                    port: 1001
                },
                {
                    message: 'Oi dibua 3',
                    port: 1002
                },
                {
                    message: 'Oi dibua 4',
                    port: 1003
                },
            ]
        });
    }
}

export default new MessageController();