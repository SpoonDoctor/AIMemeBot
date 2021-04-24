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

const susLinks: string[] = [
    "https://media.tenor.com/images/a014ae3ccf3d699cbff78e0926c287c6/tenor.gif","https://i.pinimg.com/originals/d5/d1/6e/d5d16e4a56c42e5acfd3353328f41449.gif",
    "https://media.tenor.com/images/cfa174759d18a5d62a963650821addf1/tenor.gif","https://cdn.akamai.steamstatic.com/steam/apps/1477060/header.jpg?t=1607097696",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/50165ae0-7059-454e-9661-8adc07bb4c15/de5ylz1-4dfdffed-5835-4ca4-ba7d-54f41e2c00ee.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTAxNjVhZTAtNzA1OS00NTRlLTk2NjEtOGFkYzA3YmI0YzE1XC9kZTV5bHoxLTRkZmRmZmVkLTU4MzUtNGNhNC1iYTdkLTU0ZjQxZTJjMDBlZS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.CQP4DfaTfI2_B08ln0Bx9p4mfEheBpqN7On7Zma9fkQ",
    "https://pbs.twimg.com/media/EioLiJ0XcAMPk3E.jpg","https://i.ytimg.com/vi/n0hgLDXAyPo/maxresdefault.jpg","https://ih1.redbubble.net/image.1814975440.4318/st,small,507x507-pad,600x600,f8f8f8.jpg",
    "https://ih1.redbubble.net/image.1795050090.1119/st,small,507x507-pad,600x600,f8f8f8.jpg","https://img.youtube.com/vi/vUxyYHuZiCQ/0.jpg",
    "https://i.redd.it/psxbkj0ywpn51.png", "https://ih1.redbubble.net/image.1843357763.9925/st,small,507x507-pad,600x600,f8f8f8.jpg",
    "https://i.redd.it/o9gfozbq5ts51.jpg", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/634ac9d5-dc0f-44d3-af77-1aeac3fadfc8/def5apc-7d3c6d6f-6d0d-48e1-8138-4b3723773c13.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjM0YWM5ZDUtZGMwZi00NGQzLWFmNzctMWFlYWMzZmFkZmM4XC9kZWY1YXBjLTdkM2M2ZDZmLTZkMGQtNDhlMS04MTM4LTRiMzcyMzc3M2MxMy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.4rMI9dF2VTaMFiRu6fP-vemNII2vYQGP2KU32vmaGsE",
    "https://i.redd.it/kzarl4exopo51.jpg", "https://i.redd.it/icv7l35jplm51.jpg"
]

function getRandomInt(min: number, max: number): number{
    return Math.floor(Math.random() * (max - min)) + min;
}

export async function handleSus(): Promise<void>{
    const sus: string = susLinks[getRandomInt(0,susLinks.length)]
    let groupmeMessageContent = {
        'bot_id': 'e297c5ad72d1e0d97c3fd915d2',
        'text': sus
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
}

export async function handleCommand(messageText: string): Promise<void>{
    let groupMeText: string = '';
    if(messageText.indexOf('--templates') !== -1){
        groupMeText = 'The following meme templates are currently supported: ';
        const IDKeys = Object.keys(ImageID).filter(x => !(parseInt(x) >= 0));
        for(let templateType of IDKeys){
            groupMeText += (templateType + '  ');
        }
    }
    else if(messageText.indexOf('-type') !== -1){
        let typeIndex: number = messageText.indexOf('-type');
        const templateType: string = messageText.substring(typeIndex + '-type '.length).toUpperCase();
        const templateId: ImageID = ImageID[templateType as keyof typeof ImageID];
        if(templateId){
            groupMeText = await getAIMeme(templateId);
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
    }
}

