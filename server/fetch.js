const axios = require('axios');
const formurlencoded = require('form-urlencoded');
const { v4: uuidv4 } = require('uuid');
const { wolf, wiki } = require('./sources');

const fetch = async url => await axios
  .get(url)
  .then(res => res.data)
  .catch(err => console.log(err.message));

module.exports = answersTo = async question => {
  const wolfQuestion = formurlencoded({ question }).replace('question=', '');
  const wolfUrl = wolf.base + wolf.key + wolfQuestion;
  const wikiUrl = wiki.base + question;

  const id = uuidv4();
  const wolfData = await fetch(wolfUrl);
  const wikiData = await fetch(wikiUrl);

  if (wikiData) {
    return {
      id,
      question,
      wolfData: wolfData ? wolfData : `I can't give you a short answer to that.`,
      wikiTitle: wikiData.hasOwnProperty('title') ? wikiData.title : false,
      wikiSummary: wikiData.hasOwnProperty('extract') ? wikiData.extract : false,
      wikiUrl: wikiData.hasOwnProperty('content_urls') ? wikiData.content_urls.desktop.page : false,
      wikiImage: wikiData.hasOwnProperty('thumbnail') ? wikiData.thumbnail.source : false,
    };
  } else {
    return {
      id,
      question,
      wolfData: wolfData ? wolfData : `I can't give you an answer to that.`,
      wikiTitle: false,
      wikiSummary: false,
      wikiUrl: false,
      wikiImage: false,
    };
  }
}