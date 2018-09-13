"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var LightboxSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    collection: 'usermodel',
    versionKey: false
});
exports.default = mongoose_1.model('UserModel', LightboxSchema);
//# sourceMappingURL=UserModel.js.map