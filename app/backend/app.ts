import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
const port = 8080;
const userRouter = require('./routes/user.route');
const productsRouter = require('./routes/products.route');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api',cors(), userRouter, productsRouter);


app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

