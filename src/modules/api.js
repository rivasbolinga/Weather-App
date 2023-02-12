import getData from './apiWeather.js';
import getFiveDaysWeather from './apihourly';

const form = document.querySelector('.form');
const locationInput = document.querySelector('.location-input');
const searchBtn = document.querySelector('.search-btn');
// -- Call the API with the city string to get the coord. city name and country code.
const getGeo = async (location) => {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=5157c507d51ade4731309623a34583e2`);
  const data = await response.json();
  const coordinates = data[0];
  const city = data[0].name;
  const { country } = data[0];
  getData(coordinates, city, country);
  getFiveDaysWeather(coordinates);
};
// -- Get the city input from the form.
const getInput = async (e) => {
  searchBtn.disabled = true;
  e.preventDefault();
  const location = locationInput.value;
  if (location) {
    // remove spaces from the begining and end, and after or before a coma.
    const city = (location.trim().split(/\s*,\s*/).join('+'));
    getGeo(city);
    searchBtn.disabled = false;
    form.reset();
  }
};
form.addEventListener('submit', getInput);

export default getGeo;