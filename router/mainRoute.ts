import * as express from 'express';
import {handleCommand} from '../commandHandler';

const router = express.Router();

router.use(express.urlencoded({extended: false}));
router.use(express.json());

router.post('/', (req: express.Request, res: express.Response) => {
    console.log(req.body);
    const messageText: string = req.body.text;
    if(messageText.indexOf('/meme') !== -1 && req.body.sender_type === "user"){
        handleCommand(messageText);
    }
    res.sendStatus(200);
});

export {router};