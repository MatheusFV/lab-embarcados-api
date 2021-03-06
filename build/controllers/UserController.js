"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserModel_1 = require("../models/UserModel");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.getUser = function (req, res, next) {
        UserModel_1.default
            .findOne({
            name: req.query.name,
            email: req.query.email
        })
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({
                error: error.message,
                errorStack: error.stack
            });
            next(error);
        });
    };
    UserController.prototype.createUser = function (req, res, next) {
        UserModel_1.default
            .create({
            name: req.body.name,
            email: req.body.email
        })
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({
                error: error.message,
                errorStack: error.stack
            });
            next(error);
        });
    };
    return UserController;
}());
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map