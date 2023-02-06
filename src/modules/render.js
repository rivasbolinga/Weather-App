const otherInfo = document.querySelector('.other-info');

const renderData = async (weather) => {
otherInfo.innerHTML += `<div class="feels-like container">
<div class="other-info-icon"></div>
<p class="other-info-title">Feels Like</p>
<p class="other-info-number">${weather.feel}°F</p>
</div>
<div class="humidity container">
<div class="other-info-icon"></div>
<p class="other-info-title">Humidity</p>
<p class="other-info-number">${weather.humidity}%</p>
</div>
<div class="precipitations container">
<div class="other-info-icon"></div>
<p class="other-info-title">Precipitations</p>
<p class="other-info-number">0%</p>
</div>
<div class="wind-speed container">
<div class="other-info-icon"></div>
<p class="other-info-title">Wind Speed</p>
<p class="other-info-number">${weather.wind}km/h</p>
</div>`
}

export default renderData;