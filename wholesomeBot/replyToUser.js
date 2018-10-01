const wholesomeBot = require('./botConfig');
const handleTwitterOperations = require('./handleTwitterOperations');

function replyToUser(messageToTweet = '') {
	wholesomeBot.post('statuses/update', {status: messageToTweet}, handleTwitterOperations);
}

module.exports = replyToUser;