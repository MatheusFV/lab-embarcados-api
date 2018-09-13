"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageController = /** @class */ (function () {
    function MessageController() {
    }
    MessageController.prototype.receiveMessage = function (req, res, next) {
        if (req.body.message) {
            res.status(200).json({ message: req.body.message });
        }
        else {
            res.status(400).json({ error: 'Field message is empty' });
        }
    };
    return MessageController;
}());
exports.default = new MessageController();
//# sourceMappingURL=MessageController.js.map