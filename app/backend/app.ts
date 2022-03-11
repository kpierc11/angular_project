import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from "helmet";


const app = express();
const port = 8080;
const session = require('express-session');
const productsRouter = require('./routes/products.route');
const userRouter = require('./routes/user.route');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(helmet());

app.use(session({secret:"user"}));

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.json({ 'message': 'ok' });
})


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', cors(), userRouter, productsRouter);


app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

