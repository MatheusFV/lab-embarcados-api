"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var MessageController = /** @class */ (function () {
    function MessageController() {
    }
    MessageController.prototype.sendMessage = function (req, res, next) {
        if (req.body.message == undefined) {
            res.status(400).json({ error: 'Field message is empty' });
        }
        if (!req.body.port == undefined) {
            res.status(400).json({ error: 'Field message is empty' });
        }
        // Send message
        fs.readFile('messages.txt', function (err, value) {
            var json = JSON.parse(value);
            json[req.body.port] = req.body.message;
            fs.writeFile('messages.txt', JSON.stringify(json), function (err) {
                if (err) {
                    res.status(400).json({
                        error: 'Unable to send the message'
                    });
                }
                else {
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
    };
    MessageController.prototype.requestOpenPorts = function (req, res, next) {
        fs.readFile('ports.txt', function (err, value) {
            console.log(value);
            res.status(200).json(JSON.parse(value));
        });
    };
    MessageController.prototype.saveOpenPorts = function (req, res, next) {
        fs.writeFile('ports.txt', JSON.stringify({ ports: req.body.devices }), function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('sucesso');
            }
        });
    };
    MessageController.prototype.getMessages = function (req, res, next) {
        fs.readFile('messages.txt', function (err, value) {
            var json = JSON.parse(value);
            res.status(200).json({
                message: 'Messages found',
                data: json
            });
        });
    };
    return MessageController;
}());
exports.default = new MessageController();
//# sourceMappingURL=MessageController.js.map