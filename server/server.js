const express = require('express');
const app = express();
const cors = require('cors');
const fetchingAnswersTo = require('./fetch');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const api = async (req, res) => {
  const { question } = req.query;
  const payload = await fetchingAnswersTo(question);
  res.json(payload);
}
const noApi = (_, res) => res.send(`<p>Please visit the <a href='http://localhost:1337/'>Wolfie</a> website</p>`);

app.get('/api', api);
app.get('/*', noApi);

app.listen(8008);
