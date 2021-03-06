const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');

const Query = require('./query');
const query = new Query();
const Worker = require('./worker');
const worker = new Worker();

const LOG = true;
const PORT = 8081;
const HOST = '0.0.0.0';

app.use(cors());
app.use(compression());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  LOG && console.log('/', req.query);
  res.send('Hello Cashmunity!');
});
app.get('/messages/:address', async (req, res) => {
  LOG && console.log('/messages', req.params);
  res.json(await query.messages({ ...req.params, page: req.query.page }));
});
app.get('/replies/:txid', async (req, res) => {
  LOG && console.log('/replies', req.params);
  res.json(await query.replies({ ...req.params, page: req.query.page }));
});
app.get('/likes/:address', async (req, res) => {
  LOG && console.log('/likes', req.params);
  res.json(await query.likes({ ...req.params, page: req.query.page }));
});
app.get('/name/:address', async (req, res) => {
  LOG && console.log('/name', req.params);
  res.json(await query.name(req.params));
});
app.get('/follows/:address', async (req, res) => {
  LOG && console.log('/follows', req.params);
  res.json(await query.follows(req.params));
});
app.get('/feed/:address', async (req, res) => {
  LOG && console.log('/feed', req.params);
  res.json(await query.feed({ ...req.params, page: req.query.page }));
});
app.get('/all', async (req, res) => {
  LOG && console.log('/all', req.query);
  res.json(await query.all({ page: req.query.page }));
});
app.post('/post', async (req, res) => {
  LOG && console.log('/post', req.body);
  res.json(await worker.boadcastTransaction(req.body));
});

app.listen(PORT, HOST, () => console.log(`Listening on port ${PORT}`));
