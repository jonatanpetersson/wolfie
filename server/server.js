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

app.get('/api', api);
app.listen(8008);