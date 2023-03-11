import { format } from 'date-fns'; // eslint-disable-line
import iconsProcessor from './icons.js';
import pictureProcessor from './pictures.js';

const today = format(new Date(), 'dd/MM/yyyy');
const otherInfo = document.querySelector('.other-info');
const mainWeather = document.querySelector('.main-weather');

const renderData = async (weather) => {
  otherInfo.style.display = 'grid';
  mainWeather.style.display = 'flex';
  const icon = iconsProcessor(weather.icon);
  pictureProcessor(weather.icon);
  let html = '';
  let html2 = '';
  html += `<div class="feels-like container">
<div class="other-info-icon"></div>
<p class="other-info-title">Feels Like</p>
<p class="other-info-number">${weather.feel}°C</p>
</div>
<div class="humidity container">
<div class="other-info-icon"></div>
<p class="other-info-title">Humidity</p>
<p class="other-info-number">${weather.humidity}%</p>
</div>
<div class="precipitations container">
<img class="icon-small" src="${icon}">
</div>
<div class="wind-speed container">
<div class="other-info-icon"></div>
<p class="other-info-title">Wind Speed</p>
<p class="other-info-number">${weather.wind} km/h</p>
</div>`;
  html2 += `<div class="weather-icon-container">
<img class="weather-icon" src="${icon}">
<p class="weather-text">${weather.description}</p>
</div>
<div class="degree-container">
<p class="main-degrees">${weather.degrees}°C</p>
<p class="main-location">${weather.name}, ${weather.country}</p>
<p class="main-date">${today}</p>
</div>`;
  otherInfo.innerHTML = html;
  mainWeather.innerHTML = html2;
};

export default renderData;