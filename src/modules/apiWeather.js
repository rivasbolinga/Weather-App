import Weather from './weatherdata.js'
import renderData from './render.js'
import getGeo from './api.js';

const upperCase = (string) => {
  const str = string.split(' ');
  for(let i=0; i< str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
  }
  return (str.join(' '));
}
const kmperH = (speed) => {
  const speedkm = Math.floor(speed * 3.6);
  return speedkm;
}
const storeData = (data,today) => {
console.log(data);
const weatherArray  = data.weather;
const mainObject = data.main;
const windObj = data.wind;
const { name } = data;
const { id, main, description, icon } = weatherArray[0];
const { feels_like ,humidity, g ,temp,temp_min,temp_max} = mainObject;
const {speed} = windObj;
const speedKm = kmperH(speed);
console.log(name,main,temp, humidity, speed);
const descriptionUpper = upperCase(description) 
const newWeather = new Weather(name, descriptionUpper, Math.round(temp), Math.round(feels_like), humidity, speedKm, icon);
renderData(newWeather)
}

const getData = async (coord) => {
 
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=5157c507d51ade4731309623a34583e2&units=metric`);
  const data = await response.json();
  storeData(data);

};
getData();

export default getData
