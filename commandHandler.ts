import {ImageID, getAIMeme} from './memeGen';
import {default as axios} from 'axios';

interface GMReqOptions {
    method: 'POST';
    baseURL: string;
    data: any;
    headers: any;
}

function randomEnumKey(): string {
    const IDKeys = Object.keys(ImageID).filter(x => !(parseInt(x) >= 0));
    const randomIndex = Math.floor(Math.random() * IDKeys.length);
    return IDKeys[randomIndex];
}

export async function handleCommand(messageText: string): Promise<void>{
    let groupMeText: string = '';
    if(messageText.indexOf('--templates') !== -1){
        groupMeText = 'The following meme templates are currently supported: ';
        const IDKeys = Object.keys(ImageID).filter(x => !(parseInt(x) >= 0));
        for(let templateType of IDKeys){
            groupMeText += (templateType + ' ');
        }
    }
    else if(messageText.indexOf('-type') !== -1){
        let typeIndex: number = messageText.indexOf('-type');
        const templateType: string = messageText.substring(typeIndex + '-type '.length).toUpperCase();
        console.log('templateType', templateType);
        const templateId: ImageID = ImageID[templateType as keyof typeof ImageID];
        if(templateId){
            groupMeText = await getAIMeme(templateId);
            console.log("TYPEOF: ", groupMeText)
        } else {
            groupMeText = 'Bad template name';
        }
    }
    else{
        groupMeText = await getAIMeme(ImageID[randomEnumKey() as keyof typeof ImageID]);
    }
    if(groupMeText !== ''){
        let groupmeMessageContent = {
            'bot_id': 'e297c5ad72d1e0d97c3fd915d2',
            'text': groupMeText
        };

        const gmReqOptions: GMReqOptions = {
            method: 'POST',
            baseURL: 'https://api.groupme.com/v3/bots/post',
            data: groupmeMessageContent,
            headers: {"content-type": "application/json"}
        }

        await axios.request(gmReqOptions).catch((error: any) => {
            console.log(error);
        });

        console.log(groupmeMessageContent);
    }
}

