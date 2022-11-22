const platforms_api = 'https://api.rawg.io/api/platforms?key=d67fa311e00643a78393ca763a080ff1'
const games_api = 'https://api.rawg.io/api/games?key=d67fa311e00643a78393ca763a080ff1&dates=2019-09-01,2019-09-30&platforms=18,1,7'
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://rawg-video-games-database.p.rapidapi.com/games",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "d67fa311e00643a78393ca763a080ff1",
		"X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});