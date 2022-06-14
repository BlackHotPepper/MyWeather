const https = require("https");
const key = "100e5db8f22f34f0b3d05c8de8882535";
const location = "Alaska";
const api = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + key;

function Search(){
	

	https.get(api, function(response){
		console.log(response.statusCode);

		response.on("data", function(data){
		const weatherData = JSON.parse(data);
		console.log(weatherData);

		var Temp = weatherData.main.temp;
		var Clima = weatherData.weather[0].main;
		var Country = weatherData.sys.country;
		var Des = weatherData.weather[0].description;
		var Hum = weatherData.main.humidity;
		var Lat = weatherData.coord.lat;
		var Lon = weatherData.coord.lon;
		var City = weatherData.name;
		console.log(City);
		console.log(Temp);
		/*console.log(Clima);
		console.log(Country);
		console.log(Des);
		console.log(Hum);
		console.log(Lat);
		console.log(Lon);*/
		console.log(Temp);
		console.log(weatherData.weather[0].icon)
		});
	});
}
Search();