import {Router} from 'express';
import {handleCommand} from '../commandHandler'

export const router = Router();

router.post('/', (req, res) =>{
    const messageText: string = req.body.text;
    if(messageText.indexOf('/meme') !== -1 && req.body.sender_type === "user"){
        handleCommand(messageText);
    }
    res.sendStatus(200);
});