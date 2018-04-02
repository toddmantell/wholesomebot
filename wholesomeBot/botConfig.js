require('dotenv').load();
const Twit = require('twit');

const wholesomeBot = new Twit({
	consumer_key: process.env.WHOLESOME_CONSUMER_KEY,
	consumer_secret: process.env.WHOLESOME_CONSUMER_SECRET,
	access_token: process.env.WHOLESOME_ACCESS_TOKEN,
	access_token_secret: process.env.WHOLESOME_ACCESS_TOKEN_SECRET,
	timeout_ms: 60*1000
});

module.exports = wholesomeBot;