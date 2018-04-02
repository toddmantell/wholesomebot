require('dotenv').load();
const Twit = require('twit');

const bot = new Twit({
	consumer_key: process.env.TODD_CONSUMER_KEY,
	consumer_secret: process.env.TODD_CONSUMER_SECRET,
	access_token: process.env.TODD_ACCESS_TOKEN,
	access_token_secret: process.env.TODD_ACCESS_TOKEN_SECRET,
	timeout_ms: 60*1000
});

bot.post('statuses/update', {status: `Very cool, Martin Fowler's timeless classic, "Refactoring" is getting a second edition with
code examples in JavaScript instead of Java: https://martinfowler.com/articles/201803-refactoring-2nd-ed.html #js #refactoring`}, 
(error, data, response) => {
	if (error) console.log(error);
	else console.log(`${data} was tweeted`);
});

