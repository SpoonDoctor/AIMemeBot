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
    "https://i.redd.it/kzarl4exopo51.jpg", "https://i.redd.it/icv7l35jplm51.jpg", "https://i.redd.it/jbbyn8aiw7761.jpg", "https://i.ytimg.com/vi/KVjIzWxWGkA/maxresdefault.jpg", "https://pbs.twimg.com/media/EiWRNF1UcAIPHYb.jpg",
    "https://i.ytimg.com/vi/kv886F6_-2k/maxresdefault.jpg", "https://art.ngfiles.com/images/1555000/1555156_elmont_among-ass.png?f1608686229", "https://pbs.twimg.com/media/EmuFdbZWEAAczdl.jpg",
    "https://art.ngfiles.com/images/1817000/1817519_sploogums_among-ass.png?f1620879708", "https://gingamegun.com/wp-content/uploads/2021/04/Among-Ass-2-Butt-Warfare-Free-Download-PC-Game-348x215.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cefcc4de-817d-4e55-a4a8-3d83fa458187/de5x538-2ecf7dcf-9f23-47d1-9b48-332d0b4ebcf4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NlZmNjNGRlLTgxN2QtNGU1NS1hNGE4LTNkODNmYTQ1ODE4N1wvZGU1eDUzOC0yZWNmN2RjZi05ZjIzLTQ3ZDEtOWI0OC0zMzJkMGI0ZWJjZjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.y4T1WAXZZgywwZ92XC2rLEStHD7weLodNrcz8djVJFQ",
    "https://preview.redd.it/j30evletlgn51.jpg?auto=webp&s=9dd53eb09737529caa67a9f92d29cb71d2316220", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFnQkFJ1z3UwGR2Czjm7ImxrIwhOMLy3i-gQ&usqp=CAU",
    "https://i1.wp.com/metronxme.com/wp-content/uploads/2021/04/42926-among-us-twerk-thursday-baby-got-sus.jpg", "https://i.ytimg.com/vi/Stnjr-PP9mY/maxresdefault.jpg", "https://i.ytimg.com/vi/6n9dM6mI_jg/maxresdefault.jpg",
    "https://pbs.twimg.com/media/EopTzqKXYAEJLe3.jpg", "https://cdn.drawception.com/drawings/785422/QPHRv70SRD.png", "https://64.media.tumblr.com/85b55fb5b1041a5d3040cc24d4fb1bf4/1934684930fb2613-82/s2048x3072/c91176d4c67e442688c557e21cd516e18569b8f3.png",
    "https://i.ytimg.com/vi/imsH069ZEjo/maxresdefault.jpg", "https://i.redd.it/ndvcmw54ykm51.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d46a50a6-0230-4b27-aad8-be769ae7001b/de61ul1-75c2fe2f-7128-44f2-b9af-9ecb22297a40.png/v1/fill/w_1280,h_1280,strp/really_among_us_by_no1hereignoreme_de61ul1-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2Q0NmE1MGE2LTAyMzAtNGIyNy1hYWQ4LWJlNzY5YWU3MDAxYlwvZGU2MXVsMS03NWMyZmUyZi03MTI4LTQ0ZjItYjlhZi05ZWNiMjIyOTdhNDAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.yMfTC5SDyCWZrGxVrJwH-1Ysa_9p-y1ju7_IqfD9NmM",
    "https://i.ytimg.com/vi/lAqVCcDRt70/maxresdefault.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/61242372-ef7a-4454-ab3a-2bb6255d0f54/de5drhj-7f69913d-2795-4267-8a04-0452d66923cb.png/v1/fill/w_894,h_894,strp/___among_us_faanart____by_fixxi_flowers_de5drhj-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzYxMjQyMzcyLWVmN2EtNDQ1NC1hYjNhLTJiYjYyNTVkMGY1NFwvZGU1ZHJoai03ZjY5OTEzZC0yNzk1LTQyNjctOGEwNC0wNDUyZDY2OTIzY2IucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Hm6QivmirSaZzANkw4fMD6TgvOpnPVnCOVbfVGL9vlo",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzBvMROvlk776qj9S-qSf9GKjTN72MbgCxA&usqp=CAU", "https://preview.redd.it/pluaua8ilrr51.jpg?auto=webp&s=978fee04db24dcec7894bbcde3b2e7202bfe1e13", "https://pbs.twimg.com/media/EhKwd9zWkAQg78-.jpg:large"
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
        var groupMeText, IDKeys, _i, IDKeys_1, templateType, templateType, templateId, groupmeMessageContent, gmReqOptions;
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
                    if (!(messageText.length > 6)) return [3 /*break*/, 5];
                    templateType = messageText.substring('/meme '.length).trim().toUpperCase();
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
