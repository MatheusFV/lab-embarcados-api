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
        this.router.post('/savePorts', MessageController_1.default.saveOpenPorts);
        this.router.get('/getMessages', MessageController_1.default.getMessages);
    };
    return MessageRouter;
}());
exports.default = MessageRouter;
//# sourceMappingURL=MessageRouter.js.map