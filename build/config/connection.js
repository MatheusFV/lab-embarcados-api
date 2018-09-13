"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Connection = /** @class */ (function () {
    function Connection() {
    }
    Connection.init = function () {
        var MONGO_URI = 'mongodb://localhost:27017/users';
        mongoose.connect(MONGO_URI || process.env.MONGODB_URI);
    };
    return Connection;
}());
exports.default = Connection;
//# sourceMappingURL=connection.js.map