const wholesomeBot = require('./botConfig');

const tweet = {status: `Hello, I'm wholesomebot, tweet at me and I will tweet something wholesome to you! #maketheworldnicer`};

wholesomeBot.post('statuses/update', tweet, handleTweet);

function handleTweet(error, data, response) {
	if (error) console.log(error);
	else console.log(`${data} was tweeted!`);
}