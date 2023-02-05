const weatherKind = document.querySelector('.weather-text');
const degree = document.querySelector('.main-degrees');
const cityName = document.querySelector('.main-location');
import Weather from './weatherdata.js'
const displayData = (data) => {
console.log(data);
const weatherArray  = data.weather;
const mainObject = data.main;
const windObj = data.wind;
const { description } = weatherArray[0];
const { feels_like ,humidity, g ,temp,temp_min,temp_max} = mainObject;
const {speed} = windObj;
console.log(description,feels_like,humidity,temp, temp_min, temp_max, speed)
}

export default displayData;