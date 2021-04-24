"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCommand = exports.handleSus = void 0;
var memeGen_1 = require("./memeGen");
var axios_1 = require("axios");
function randomEnumKey() {
    var IDKeys = Object.keys(memeGen_1.ImageID).filter(function (x) { return !(parseInt(x) >= 0); });
    var randomIndex = Math.floor(Math.random() * IDKeys.length);
    return IDKeys[randomIndex];
}
var susLinks = [
    "https://media.tenor.com/images/a014ae3ccf3d699cbff78e0926c287c6/tenor.gif", "https://i.pinimg.com/originals/d5/d1/6e/d5d16e4a56c42e5acfd3353328f41449.gif",
    "https://media.tenor.com/images/cfa174759d18a5d62a963650821addf1/tenor.gif", "https://cdn.akamai.steamstatic.com/steam/apps/1477060/header.jpg?t=1607097696",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/50165ae0-7059-454e-9661-8adc07bb4c15/de5ylz1-4dfdffed-5835-4ca4-ba7d-54f41e2c00ee.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTAxNjVhZTAtNzA1OS00NTRlLTk2NjEtOGFkYzA3YmI0YzE1XC9kZTV5bHoxLTRkZmRmZmVkLTU4MzUtNGNhNC1iYTdkLTU0ZjQxZTJjMDBlZS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.CQP4DfaTfI2_B08ln0Bx9p4mfEheBpqN7On7Zma9fkQ",
    "https://pbs.twimg.com/media/EioLiJ0XcAMPk3E.jpg", "https://i.ytimg.com/vi/n0hgLDXAyPo/maxresdefault.jpg", "https://ih1.redbubble.net/image.1814975440.4318/st,small,507x507-pad,600x600,f8f8f8.jpg",
    "https://ih1.redbubble.net/image.1795050090.1119/st,small,507x507-pad,600x600,f8f8f8.jpg", "https://img.youtube.com/vi/vUxyYHuZiCQ/0.jpg",
    "https://i.redd.it/psxbkj0ywpn51.png", "https://ih1.redbubble.net/image.1843357763.9925/st,small,507x507-pad,600x600,f8f8f8.jpg",
    "https://i.redd.it/o9gfozbq5ts51.jpg", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/634ac9d5-dc0f-44d3-af77-1aeac3fadfc8/def5apc-7d3c6d6f-6d0d-48e1-8138-4b3723773c13.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjM0YWM5ZDUtZGMwZi00NGQzLWFmNzctMWFlYWMzZmFkZmM4XC9kZWY1YXBjLTdkM2M2ZDZmLTZkMGQtNDhlMS04MTM4LTRiMzcyMzc3M2MxMy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.4rMI9dF2VTaMFiRu6fP-vemNII2vYQGP2KU32vmaGsE",
    "https://i.redd.it/kzarl4exopo51.jpg", "https://i.redd.it/icv7l35jplm51.jpg"
];
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function handleSus() {
    return __awaiter(this, void 0, void 0, function () {
        var sus, groupmeMessageContent, gmReqOptions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sus = susLinks[getRandomInt(0, susLinks.length)];
                    groupmeMessageContent = {
                        'bot_id': 'e297c5ad72d1e0d97c3fd915d2',
                        'text': sus
                    };
                    gmReqOptions = {
                        method: 'POST',
                        baseURL: 'https://api.groupme.com/v3/bots/post',
                        data: groupmeMessageContent,
                        headers: { "content-type": "application/json" }
                    };
                    return [4 /*yield*/, axios_1.default.request(gmReqOptions).catch(function (error) {
                            console.log(error);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.handleSus = handleSus;
function handleCommand(messageText) {
    return __awaiter(this, void 0, void 0, function () {
        var groupMeText, IDKeys, _i, IDKeys_1, templateType, typeIndex, templateType, templateId, groupmeMessageContent, gmReqOptions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    groupMeText = '';
                    if (!(messageText.indexOf('--templates') !== -1)) return [3 /*break*/, 1];
                    groupMeText = 'The following meme templates are currently supported: ';
                    IDKeys = Object.keys(memeGen_1.ImageID).filter(function (x) { return !(parseInt(x) >= 0); });
                    for (_i = 0, IDKeys_1 = IDKeys; _i < IDKeys_1.length; _i++) {
                        templateType = IDKeys_1[_i];
                        groupMeText += (templateType + '  ');
                    }
                    return [3 /*break*/, 7];
                case 1:
                    if (!(messageText.indexOf('-type') !== -1)) return [3 /*break*/, 5];
                    typeIndex = messageText.indexOf('-type');
                    templateType = messageText.substring(typeIndex + '-type '.length).toUpperCase();
                    templateId = memeGen_1.ImageID[templateType];
                    if (!templateId) return [3 /*break*/, 3];
                    return [4 /*yield*/, memeGen_1.getAIMeme(templateId)];
                case 2:
                    groupMeText = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    groupMeText = 'Bad template name';
                    _a.label = 4;
                case 4: return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, memeGen_1.getAIMeme(memeGen_1.ImageID[randomEnumKey()])];
                case 6:
                    groupMeText = _a.sent();
                    _a.label = 7;
                case 7:
                    if (!(groupMeText !== '')) return [3 /*break*/, 9];
                    groupmeMessageContent = {
                        'bot_id': 'e297c5ad72d1e0d97c3fd915d2',
                        'text': groupMeText
                    };
                    gmReqOptions = {
                        method: 'POST',
                        baseURL: 'https://api.groupme.com/v3/bots/post',
                        data: groupmeMessageContent,
                        headers: { "content-type": "application/json" }
                    };
                    return [4 /*yield*/, axios_1.default.request(gmReqOptions).catch(function (error) {
                            console.log(error);
                        })];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.handleCommand = handleCommand;
