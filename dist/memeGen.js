"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var https = require("https");
var fs = require("fs");
var axios_1 = require("axios");
var FormData = require('form-data'); //Gotta be a better way to do this
var qs = require("qs");
var ImageID;
(function (ImageID) {
    ImageID[ImageID["DISTRACTEDBOYFRIEND"] = 112126428] = "DISTRACTEDBOYFRIEND";
    ImageID[ImageID["BATMANSLAPPINGROBIN"] = 438680] = "BATMANSLAPPINGROBIN";
    ImageID[ImageID["TWOBUTTONS"] = 87743020] = "TWOBUTTONS";
    ImageID[ImageID["DRAKEHOTLINEBLING"] = 181913649] = "DRAKEHOTLINEBLING";
    ImageID[ImageID["ONEDOESNOTSIMPLY"] = 61579] = "ONEDOESNOTSIMPLY";
    ImageID[ImageID["MOCKINGSPONGEBOB"] = 102156234] = "MOCKINGSPONGEBOB";
    ImageID[ImageID["EXPANDINGBRAIN"] = 93895088] = "EXPANDINGBRAIN";
    ImageID[ImageID["CHANGEMYMIND"] = 129242436] = "CHANGEMYMIND";
    ImageID[ImageID["LEFTEXIT12OFFRAMP"] = 124822590] = "LEFTEXIT12OFFRAMP";
    ImageID[ImageID["ANCIENTALIENS"] = 101470] = "ANCIENTALIENS";
    ImageID[ImageID["ROLLSAFETHINKABOUTIT"] = 89370399] = "ROLLSAFETHINKABOUTIT";
    ImageID[ImageID["FUTURAMAFRY"] = 61520] = "FUTURAMAFRY";
    ImageID[ImageID["BOARDROOMMEETING"] = 1035805] = "BOARDROOMMEETING";
    ImageID[ImageID["WAITINGSKELETON"] = 4087833] = "WAITINGSKELETON";
    ImageID[ImageID["XEVERYWHERE"] = 91538330] = "XEVERYWHERE";
    ImageID[ImageID["WOMANYELLINGATCAT"] = 188390779] = "WOMANYELLINGATCAT";
})(ImageID = exports.ImageID || (exports.ImageID = {}));
var httpsAgent = new https.Agent({
    rejectUnauthorized: false,
    cert: fs.readFileSync('./SSL/cert.pem'),
    key: fs.readFileSync('./SSL/key.pem'),
    passphrase: 'pass'
});
function getAIMeme(imgId) {
    return __awaiter(this, void 0, void 0, function () {
        var dataGetOptions, dataGetResponse, cookies, __tok, getMemeTextCookieString, form, formHeaders, getMemeTextOptions, memeTextGetResponse, memeText, textBoxes, _i, memeText_1, text, queryParams, captionImageOptions, captionImageResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dataGetOptions = {
                        method: "GET",
                        baseURL: "https://imgflip.com",
                        url: '/ajax_get_le_data',
                        headers: {
                            'Accept': '*/*',
                            'Connection': 'keep-alive',
                            'Host': 'imgflip.com'
                        },
                        httpsAgent: httpsAgent,
                        withCredentials: true
                    };
                    return [4 /*yield*/, axios_1.default.request(dataGetOptions).catch(function (error) {
                            console.log(error);
                        })];
                case 1:
                    dataGetResponse = _a.sent();
                    cookies = dataGetResponse.headers["set-cookie"];
                    __tok = dataGetResponse.data.__tok;
                    console.log('data: ', dataGetResponse.data);
                    console.log('cookies: ', cookies);
                    console.log('__tok: ', __tok);
                    getMemeTextCookieString = parseCookies(cookies);
                    console.log('cookie string: ', getMemeTextCookieString);
                    form = new FormData();
                    form.append('meme_id', imgId);
                    form.append('init_text', '');
                    form.append('__tok', __tok);
                    form.append('__cookie_enabled', '1');
                    formHeaders = form.getHeaders();
                    console.log('HEADERS', formHeaders);
                    getMemeTextOptions = {
                        method: "POST",
                        baseURL: "https://imgflip.com",
                        url: '/ajax_ai_meme',
                        headers: __assign({ 'Accept': '*/*', 'Connection': 'keep-alive', 'Host': 'imgflip.com', 'Cookie': getMemeTextCookieString }, formHeaders),
                        httpsAgent: httpsAgent,
                        data: form,
                        withCredentials: true
                    };
                    return [4 /*yield*/, axios_1.default.request(getMemeTextOptions).catch(function (error) {
                            console.log(error);
                        })];
                case 2:
                    memeTextGetResponse = _a.sent();
                    console.log(memeTextGetResponse);
                    memeText = memeTextGetResponse.data.texts;
                    textBoxes = [];
                    for (_i = 0, memeText_1 = memeText; _i < memeText_1.length; _i++) {
                        text = memeText_1[_i];
                        textBoxes.push({ text: text });
                    }
                    queryParams = qs.stringify({
                        template_id: imgId,
                        username: "AIMemeBot",
                        password: 'thisismypassword1',
                        boxes: textBoxes
                    });
                    console.log("query: ", queryParams);
                    captionImageOptions = {
                        method: 'POST',
                        baseURL: 'https://api.imgflip.com',
                        url: "/caption_image?" + queryParams,
                        headers: { 'content-type': 'application/json' },
                        httpsAgent: httpsAgent,
                        withCredentials: true
                    };
                    return [4 /*yield*/, axios_1.default.request(captionImageOptions).catch(function (error) {
                            console.log(error);
                        })];
                case 3:
                    captionImageResponse = _a.sent();
                    console.log(captionImageResponse);
                    return [2 /*return*/, captionImageResponse.data.data.url];
            }
        });
    });
}
exports.getAIMeme = getAIMeme;
function parseCookies(cookies) {
    var cookieString = '';
    var addSpace = false;
    console.log("COOOOOOOKIES: ", cookies);
    for (var _i = 0, cookies_1 = cookies; _i < cookies_1.length; _i++) {
        var cookie = cookies_1[_i];
        if (addSpace) {
            cookieString += ' ';
        }
        addSpace = true;
        var endOfCookie = cookie.indexOf(';');
        console.log('index: ', endOfCookie);
        var usefulBit = cookie.substring(0, endOfCookie + 1);
        cookieString += usefulBit;
    }
    return cookieString;
}
