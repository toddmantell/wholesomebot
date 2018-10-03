const bot = require('./botConfig');
const sweetTweets = require('../tweets/sweetTweets');
const prepareKindResponse = require('../tweets/defensiveTweets');
const handleTwitterOperations = require('./handleTwitterOperations');
const replyToUser = require('./replyToUser');

const stream = bot.stream('statuses/filter', {track: '@_wholesome_bot_'});

stream.on('tweet', tweet => {respondToTweet(tweet)});
stream.on('follow', tweet => {}); //respond to follows

function respondToTweet(tweet) {
	const {text: tweetText, user: {screen_name}} = tweet;

	console.log(screen_name, text);	
	// if (text.includes('Send me a wholesome picture')) //send a cute picture or video
	
	console.log('...sending tweet');	
	if (tweetIsNice(tweetText) && screen_name) replyToUser(sweetTweets(screen_name));

	if (tweetIsMean(tweetText) && screen_name) replyToUser(prepareKindResponse(screen_name));
	
	if (text.includes('#wholesome')); //send something wholesome

	if (text.toUpperCase().includes('Fuck you')) replyToUser(prepareKindResponse(screen_name));
}

function tweetIsNice() {
	return nicePhrases.find(phrase => text.toUpperCase().includes(phrase));
}

function tweetIsMean() {
	return meanPhrases.find(phrase => text.toUpperCase().includes(phrase));
}

const meanPhrases = ['FUCK YOU', 'YOU SUCK', 'EAT SHIT', 'I HATE YOU', 'FUCK OFF'];
const nicePhrases = ["YOU'RE AWESOME", 'YOU ARE AWESOME','I LOVE YOU', 'YOU ROCK', 'YOU MAKE ME HAPPY', 'YOU MAKE ME FEEL GOOD'];
