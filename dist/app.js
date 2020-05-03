"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mainRoute_1 = require("./router/mainRoute");
var app = express_1.default();
app.use(express_1.default.urlencoded({
    extended: false
}));
app.use('/', mainRoute_1.router);
app.listen(process.env.PORT || 8080, function () {
    console.log('Listening!');
});
