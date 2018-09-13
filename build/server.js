"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes_1 = require("./router/routes");
var middleware_1 = require("./config/middleware");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        middleware_1.default.init(this);
        routes_1.default.init(this);
    }
    return Server;
}());
exports.Server = Server;
// export
exports.default = new Server().app;
//# sourceMappingURL=server.js.map