"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var MessageRouter_1 = require("./MessageRouter");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.init = function (server) {
        var router = express.Router();
        server.app.use('/', router);
        // users
        server.app.use('/v1/message', new MessageRouter_1.default().router);
    };
    return Routes;
}());
exports.default = Routes;
//# sourceMappingURL=routes.js.map