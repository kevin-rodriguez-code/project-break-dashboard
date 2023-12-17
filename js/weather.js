const city = document.getElementById("city")
const currentWeather = document.getElementById("current-weather")
const temperature = document.getElementById('temperature')
const currentTemperature = document.getElementById('current-temperature')
const degrees = document.getElementById("degrees")
const rain = document.getElementById("rain")
const humidityAtt = document.getElementById("humidity")
const wind = document.getElementById("wind")
const hours = document.getElementById("hours")

const apiKey = "fc2c1e9414df42bbba2161442231712";
const cityApi = "Burriana";
const encodedCity = encodeURIComponent(cityApi);
const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodedCity}&aqi=no`;




fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const {location} = data
    const {name, region, country} = location
    const {current} = data 
    const {humidity, precip_in, temp_c: renamedTemperature, wind_kph, condition: condition1} = current
    const {icon, text} = condition1
    const {forecast} = data
    const {forecastday} = forecast
    const [firstElement] = forecastday
    const {hour} = firstElement
    const [firstHourElement] = hour;
    
    city.innerHTML = `${name}, ${region}, ${country}`
    currentWeather.innerHTML = `${text}`
    degrees.innerHTML = `${renamedTemperature}`
    degrees.insertAdjacentHTML("afterbegin",`<img src="${icon}" alt=""></img>`)
    rain.innerHTML = `Precipitaciones:${precip_in}%`
    humidityAtt.innerHTML = `Humedad: ${humidity}%`
    wind.innerHTML = `Viento: ${wind_kph} Km/h`
    for (let i = 0; i < hour.length; i++) {
        const { temp_c: renamedTemperatureHour, condition: conditionHour, time:timeHour } = hour[i];
        const { icon: iconHour } = conditionHour;
        const formattedTime = timeHour.substr(11, 5)
        
        hours.innerHTML += `
            <div>${formattedTime}</div>
            <img src="${iconHour}" alt="${iconHour}">
            <div>Temperatura: ${renamedTemperatureHour}</div>
        `;

    }

})
.catch((error) => {
    console.error("Error en la solicitud:", error);
});

