const wholesomeBot = require('./botConfig');

wholesomeBot.get('followers/list', {screen_name: '_wholesome_bot_'}, handleGetFollowers);

function handleGetFollowers(error, data, response) {
	if (error) console.log(error);
	else console.log(`Followers:`, showFollowers(data));
}

function showFollowers(responseData) {
	const listOfUsers = responseData.users.map(user => {
		return {
			Username: user.screen_name,
			Name: user.name
		};
	});

	return listOfUsers;
}