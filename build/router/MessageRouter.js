"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageController_1 = require("../controllers/MessageController");
var express_1 = require("express");
/**
 * @class UserRouter
 */
var MessageRouter = /** @class */ (function () {
    function MessageRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    MessageRouter.prototype.routes = function () {
        this.router.post('/', MessageController_1.default.sendMessage);
        this.router.get('/ports', MessageController_1.default.requestOpenPorts);
    };
    return MessageRouter;
}());
exports.default = MessageRouter;
//# sourceMappingURL=MessageRouter.js.map