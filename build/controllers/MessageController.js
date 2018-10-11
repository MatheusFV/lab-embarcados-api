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
        if (!req.body.body == undefined) {
            res.status(400).json({ error: 'Field message is empty' });
        }
        // Send message
        res.status(200).json({
            message: 'Messa sent',
            data: {
                message: req.body.message,
                port: req.body.port
            }
        });
    };
    MessageController.prototype.requestOpenPorts = function (req, res, next) {
        fs.readFile('ports.txt', function (err, value) {
            console.log(value);
            res.status(200).json(JSON.parse(value));
        });
    };
    MessageController.prototype.saveOpenPorts = function (req, res, next) {
        fs.writeFile('ports.txt', JSON.stringify({ ports: [100, 200, 300, 400, 500] }), function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('sucesso');
            }
        });
    };
    return MessageController;
}());
exports.default = new MessageController();
//# sourceMappingURL=MessageController.js.map