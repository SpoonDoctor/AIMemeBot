import * as https from 'https';
import * as fs from 'fs';
import {default as axios} from 'axios';
let FormData = require('form-data'); //Gotta be a better way to do this
import * as qs from 'qs';

export enum ImageID {
    DISTRACTEDBOYFRIEND = 112126428,
    BATMANSLAPPINGROBIN = 438680,
    TWOBUTTONS = 87743020,
    DRAKEHOTLINEBLING = 181913649,
    ONEDOESNOTSIMPLY = 61579,
    MOCKINGSPONGEBOB = 102156234,
    EXPANDINGBRAIN = 93895088,
    CHANGEMYMIND = 129242436,
    LEFTEXIT12OFFRAMP = 124822590,
    ANCIENTALIENS = 101470,
    ROLLSAFETHINKABOUTIT = 89370399,
    FUTURAMAFRY = 61520,
    BOARDROOMMEETING = 1035805,
    WAITINGSKELETON = 4087833,
    XEVERYWHERE = 91538330,
    WOMANYELLINGATCAT = 188390779
}


interface AxiosOptions {
    method: "GET" | "POST";
    baseURL: string;
    url: string;
    data?: any;
    headers: any;
    httpsAgent: any;
    withCredentials: true;
}

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
    cert: fs.readFileSync('./SSL/cert.pem'),
    key: fs.readFileSync('./SSL/key.pem'),
    passphrase: 'pass'
});

export async function getAIMeme(imgId: ImageID): Promise<string> {

    const dataGetOptions: AxiosOptions = {
        method: "GET",
        baseURL: "https://imgflip.com",
        url: '/ajax_get_le_data',
        headers: {
            'Accept': '*/*',
            'Connection': 'keep-alive',
            'Host': 'imgflip.com'
        },
        httpsAgent,
        withCredentials: true
    }
    const dataGetResponse: any = await axios.request(dataGetOptions).catch((error: any) => {
        console.log(error);
    });

    const cookies: any = dataGetResponse.headers["set-cookie"];
    const __tok: any = dataGetResponse.data.__tok;
    

    let getMemeTextCookieString: string = parseCookies(cookies);

    const form = new FormData();
    form.append('meme_id', imgId);
    form.append('init_text', '');
    form.append('__tok', __tok);
    form.append('__cookie_enabled', '1');

    const formHeaders = form.getHeaders();

    const getMemeTextOptions: AxiosOptions = {
        method: "POST",
        baseURL: "https://imgflip.com",
        url: '/ajax_ai_meme',
        headers: {
            'Accept': '*/*',
            'Connection': 'keep-alive',
            'Host': 'imgflip.com',
            'Cookie': getMemeTextCookieString,
            ...formHeaders
        },
        httpsAgent,
        data: form,
        withCredentials: true
    }

    const memeTextGetResponse: any = await axios.request(getMemeTextOptions).catch((error: any) => {
        console.log(error);
    });

    const memeText: any = memeTextGetResponse.data.texts;

    const textBoxes = [];

    for(const text of memeText){
        textBoxes.push({text})
    }

    const queryParams = qs.stringify({
        template_id: imgId,
        username: "AIMemeBot",
        password: 'thisismypassword1',
        boxes: textBoxes
    });

    const captionImageOptions: AxiosOptions = {
        method: 'POST',
        baseURL: 'https://api.imgflip.com',
        url: "/caption_image?" + queryParams,
        headers: {'content-type': 'application/json'},
        httpsAgent,
        withCredentials: true
    }

    const captionImageResponse: any = await axios.request(captionImageOptions).catch((error: any) => {
        console.log(error);
    });

    return captionImageResponse.data.data.url;
}

function parseCookies(cookies: any): string {
    let cookieString: string = '';
    let addSpace: boolean = false;
    for(let cookie of cookies){
        if(addSpace){
            cookieString += ' ';
        }
        addSpace = true;
        const endOfCookie: number = cookie.indexOf(';');
        const usefulBit: string = cookie.substring(0, endOfCookie+1);
        cookieString += usefulBit
    }
    return cookieString;
}