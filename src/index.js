import './style.css';
import displayData from './modules/api.js'
const key = '5157c507d51ade4731309623a34583e2';
const form = document.querySelector('.form');
const locationInput = document.querySelector('.location-input');

const getData = async (lat, lon) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`);
  const data = await response.json();

  displayData(data);
};

const getGeo = async (location) => {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${key}`);
  const data = await response.json();
  const coordinates = data[0];
  const { lat, lon } = coordinates;
  getData(lat, lon);
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const location = locationInput.value;
  if (location) {
    // remove spaces from the begining and end, and after or before a coma.
    getGeo(location.trim().split(/\s*,\s*/).join('+'));
  }
});
