require('dotenv').config()

module.exports = {
  wolf: {
    base: 'http://api.wolframalpha.com/v1/result',
    key: process.env.API_KEY,
    mockUrl: 'http://api.wolframalpha.com/v1/result?appid=DEMO&i=Is+a+tomato+a+fruit%3F&',
  },
  wiki: {
    base: 'https://en.wikipedia.org/api/rest_v1/page/summary/',
    mockUrl: 'https://en.wikipedia.org/api/rest_v1/page/summary/tomato',
  }
}