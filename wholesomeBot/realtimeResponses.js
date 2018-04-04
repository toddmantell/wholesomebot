const wholesomeBot = require('./botConfig');
const sweetTweets = require('../tweets/sweetTweets');
const handleTwitterOperations = require('./handleTwitterOperations');

const stream = wholesomeBot.stream('statuses/filter', {track: '@_wholesome_bot_'});

stream.on('tweet', tweet => {respondToTweet(tweet)});

function respondToTweet(tweet) {
	console.log(tweet.user.screen_name, tweet.text);
	
	if (tweet.text.includes('Send me a wholesome picture')) {
		//send a cute picture or video
	}
	if (tweet.user.screen_name) {
		wholesomeBot.post('statuses/update', {status: sweetTweets(tweet.user.screen_name)}, handleTwitterOperations);
	}
}