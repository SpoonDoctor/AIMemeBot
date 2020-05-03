"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var commandHandler_1 = require("../commandHandler");
exports.router = express_1.Router();
exports.router.post('/', function (req, res) {
    var messageText = req.body.text;
    if (messageText.indexOf('/meme') !== -1 && req.body.sender_type === "user") {
        commandHandler_1.handleCommand(messageText);
    }
    res.sendStatus(200);
});
