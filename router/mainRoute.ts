import * as express from 'express';
import {handleCommand, handleSus} from '../commandHandler';

const router = express.Router();

router.use(express.urlencoded({extended: false}));
router.use(express.json());

router.post('/', (req: express.Request, res: express.Response) => {
    const messageText: string = req.body.text;
    if(req.body && messageText.indexOf('/meme') !== -1 && req.body.sender_type === "user"){
        handleCommand(messageText);
    } else if(req.body && ((messageText.indexOf('/amongass') !== -1) || (messageText.indexOf('sus') !== -1))){
        handleSus();
    }
    res.sendStatus(200);
});

export {router};