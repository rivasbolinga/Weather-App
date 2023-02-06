const weatherKind = document.querySelector('.weather-text');
const degree = document.querySelector('.main-degrees');
const cityName = document.querySelector('.main-location');
import Weather from './weatherdata.js'
import renderData from './render.js'
const storeData = (data) => {
console.log(data);
const weatherArray  = data.weather;
const mainObject = data.main;
const windObj = data.wind;
const { name } = data;
const { main } = weatherArray[0];
const { feels_like ,humidity, g ,temp,temp_min,temp_max} = mainObject;
const {speed} = windObj;
console.log(name,main,temp, humidity, speed);
const newWeather = new Weather(name,main, temp, feels_like, humidity, speed);
renderData(newWeather)
}

export default storeData;