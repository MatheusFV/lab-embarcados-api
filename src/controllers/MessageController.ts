import * as express from 'express';
import * as fs from 'fs';

class MessageController {
    public sendMessage(req: express.Request, res: express.Response, next: express.NextFunction): void {
        if (req.body.message == undefined) { res.status(400).json({ error: 'Field message is empty' }); }
        if (!req.body.port == undefined) { res.status(400).json({ error: 'Field message is empty' }); }
        // Send message
        fs.readFile('messages.txt', (err: any, value: any) => {
            const json: object = JSON.parse(value);

            json[req.body.port] = req.body.message;
            fs.writeFile('messages.txt', JSON.stringify(json) , (err) => {
                if (err) {
                    res.status(400).json({
                        error: 'Unable to send the message'
                    });
                } else {
                    res.status(200).json({
                        message: 'Message sent',
                        data: {
                            message: req.body.message,
                            port: req.body.port
                        }
                    });
                }
            });
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
        fs.readFile('messages.txt', (err: any, value: any) => {
            const json: object = JSON.parse(value);

            res.status(200).json({
                message: 'Messages found',
                data: json
            });
        });
    }
}

export default new MessageController();