const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature =  document.querySelector('.temperature');
const description =  document.querySelector('.description');
const humidity =  document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');
async function checkWeather(city) {
    const api_key = '62648262263caaa2972463dc988bf2bb';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);
    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        return;
    }
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°`

    description.innerHTML =`${weather_data.weather[0].description}`

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind_speed.innerHTML =`${weather_data.wind.speed}km/h`;
} 
searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});