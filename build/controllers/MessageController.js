"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageController = /** @class */ (function () {
    function MessageController() {
    }
    MessageController.prototype.sendMessage = function (req, res, next) {
        if (!req.body.message) {
            res.status(400).json({ error: 'Field message is empty' });
        }
        if (!req.body.body) {
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
        res.status(200).json({ ports: [100, 200, 300, 400, 500] });
    };
    return MessageController;
}());
exports.default = new MessageController();
//# sourceMappingURL=MessageController.js.map