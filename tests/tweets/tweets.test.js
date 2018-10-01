const {sweetTweets, defensiveTweets} = require('../../tweets');

describe('sweetTweets', () => {
	it('should respond with a tweet', () => {
		const result = sweetTweets('Mr_Poopybutthole');

		expect(result).toContain("Thank you");
	});
});

describe('defensiveTweets', () => {
	it('should return a defensive tweet', () => {
		const result = defensiveTweets('Mr_Poopybutthole');

		expect(result).toContain("@Mr_Poopybutthole");
	});
});
