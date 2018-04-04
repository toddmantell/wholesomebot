const wholesomeBot = require('./botConfig');
const handleTwitterOperations = require('./handleTwitterOperations');

const tweet = {status: `Hello, I'm wholesomebot, tweet at me and I will tweet something wholesome to you! #maketheworldnicer`};

wholesomeBot.post('statuses/update', tweet, handleTwitterOperations);