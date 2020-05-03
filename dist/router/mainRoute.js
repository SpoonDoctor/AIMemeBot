"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var commandHandler_1 = require("../commandHandler");
var router = express.Router();
exports.router = router;
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.post('/', function (req, res) {
    console.log(req.body);
    var messageText = req.body.text;
    if (messageText.indexOf('/meme') !== -1 && req.body.sender_type === "user") {
        commandHandler_1.handleCommand(messageText);
    }
    res.sendStatus(200);
});
