import express, {Request, Response} from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express()

app.use(cors())
app.use(bodyParser.json())

const port = process.env.port || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('express')
})


app.listen(port, () => {
    console.log('Start app express')
})