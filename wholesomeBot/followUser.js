const bot = require('./botConfig');
const handleTwitterOperations = require('./handleTwitterOperations');

bot.post('friendships/create', {screen_name: 'toddmantell'}, handleTwitterOperations);