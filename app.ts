import {default as express} from 'express';
import {router as mainRouter} from './router/mainRoute';
import {handleCommand} from './commandHandler';

const app = express();

app.use(express.urlencoded({
    extended: false
}));

app.use('/', mainRouter);


app.listen(process.env.PORT || 8080, function () {
    console.log('Listening!');
});