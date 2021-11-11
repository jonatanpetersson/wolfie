const axios = require('axios');
const formurlencoded = require('form-urlencoded');
const { v4: uuidv4 } = require('uuid');
const { wolf, wiki } = require('./sources');

const fetch = async url => await axios
  .get(url)
  .then(res => url.match(wolf.base) ? res.data : res.data.extract)
  .catch(err => console.log(err.message));

module.exports = answersTo = async question => {
  const wolfQuestion = formurlencoded({question}).replace('question=', '');
  const wolfUrl = wolf.base + wolf.key + wolfQuestion;
  const wikiUrl = wiki.base + question;

  const id = uuidv4();
  const wolfData = await fetch(wolf.mockUrl);
  const wikiData = await fetch(wikiUrl);

  return { 
    id, 
    question, 
    wolfData: wolfData ? wolfData : `I can't give you a short answer to that.`, 
    wikiData: wikiData ? wikiData : 'No wikipedia article available' };
}