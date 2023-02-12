import { format } from 'date-fns'; // eslint-disable-line

const today = format(new Date(), 'dd/MM/yyyy');
const otherInfo = document.querySelector('.other-info');
const mainWeather = document.querySelector('.main-weather');

const renderData = async (weather) => {
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
<div class="other-info-icon">${weather.icon}</div>
<p class="other-info-title">Precipitations</p>
<p class="other-info-number">0%</p>
</div>
<div class="wind-speed container">
<div class="other-info-icon"></div>
<p class="other-info-title">Wind Speed</p>
<p class="other-info-number">${weather.wind} km/h</p>
</div>`;
  html2 += `<div class="weather-icon-container">
<div class="weather-icon"></div>
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