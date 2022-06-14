const api = {
	key: "100e5db8f22f34f0b3d05c8de8882535",
	base: "https://api.openweathermap.org/data/2.5/"
};

const city = window.document.getElementById("city-search");
const button = window.document.getElementById("go");
const home = window.document.getElementById("city-box");

button.addEventListener('click', function(){
	Search(city.value);
})
function Search(home){
	fetch(`${api.base}weather?q=${home}&appid=${api.key}`)
		.then(response => {
			console.log(response)
			if (!response.ok) {
				throw new Error(`http error: status ${response.status}`)
			}
			return response.json();
		})
		.catch(error => {
			alert(error.message)
		})
		.then(response => {
			displayResults(response)
		})
}


function displayResults(weather){

	const Temp = Math.round(`${weather.main.temp}` - 273.15);
	const Min = Math.round(`${weather.main.temp_min}` - 273.15);
	const Max = Math.round(`${weather.main.temp_max}` - 273.15);
	const Hum = weather.main.humidity;
	const Atm = weather.main.pressure;
	const img = weather.weather[0].icon;
	const Icon = window.document.getElementById("icon");

	const HumText = window.document.getElementById("humidity");
	const PresText = window.document.getElementById("pressure");

	Icon.src = `./docs/icons/${img}.png`;

	window.document.getElementById("min-max").innerText = `Min: ${Min}°C, Max: ${Max}°C`

	window.document.getElementById("graus").innerText = `${Temp}°C`;
	window.document.getElementById("city-name").innerText = `${weather.name}, ${weather.sys.country}`;
	window.document.getElementById("lat").innerText = `lat: ${weather.coord.lat}, lon: ${weather.coord.lon}`;


	HumText.innerText = `Humidity: ${Hum}%`;
	PresText.innerText = `Pressure: ${Atm} Pa`;
}

const Ans = window.document.getElementById("city-name");
const Texto ="How's your weather?";
const Interval = 110;

function showText(Ans, Texto, Interval){

    const char = Texto.split("").reverse();
    const typer = setInterval(() => {
        if(!char.length) {
            return clearInterval(typer);
        }
        const next = char.pop();

        Ans.innerHTML += next;
    }, Interval)
}
showText(Ans, Texto, Interval);
