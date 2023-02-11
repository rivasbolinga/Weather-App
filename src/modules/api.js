const form = document.querySelector('.form');
const locationInput = document.querySelector('.location-input');
import getData from './apiWeather.js'
const searchBtn = document.querySelector('.search-btn')
const getGeo = async (location) => {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=5157c507d51ade4731309623a34583e2`);
  const data = await response.json();
  const coordinates = data[0];
 getData(coordinates);
};
form.addEventListener('submit', async (e) => {
  searchBtn.disabled = true;
  e.preventDefault();
  const location = locationInput.value;
  if (location) {
    // remove spaces from the begining and end, and after or before a coma.
    getGeo(location.trim().split(/\s*,\s*/).join('+'));
    searchBtn.disabled = false;
    form.reset();
  } 
  
  return;
});
export default getGeo;