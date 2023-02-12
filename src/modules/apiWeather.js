import Weather from './weatherdata.js';
import renderData from './render.js';

const upperCase = (string) => {
  const str = string.split(' ');
  for (let i = 0; i < str.length; i += 1) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
  }
  return (str.join(' '));
};
const kmperH = (speed) => {
  const speedkm = Math.floor(speed * 3.6);
  return speedkm;
};
// 2. Store the data into a variables and then into an object.
const storeData = (data, name, country) => {
  const weatherArray = data.weather;
  const mainObject = data.main;
  const windObj = data.wind;
  const { description, icon } = weatherArray[0];
  const {
    feels_like: feelsLike, humidity, temp,
  } = mainObject;
  const { speed } = windObj;
  const speedKm = kmperH(speed);
  const descriptionUpper = upperCase(description);
  const newWeather = new Weather(name, country, descriptionUpper,
    Math.round(temp), Math.round(feelsLike), humidity, speedKm, icon);
  renderData(newWeather);
};
// -- 1. Get Data  Weather from the API
const getData = async (coordinates, city, country) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=5157c507d51ade4731309623a34583e2&units=metric`);
  const data = await response.json();
  storeData(data, city, country);
};

export default getData;
