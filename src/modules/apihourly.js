import Days from './fivedays.js';
import iconsProcessor from './icons.js';

const { parseISO, format } = require('date-fns'); // eslint-disable-line
const hoursSection = document.querySelector('.hour-section');
// -- 3. Render all the data
const renderHours = (days) => {
  hoursSection.innerHTML = '';
  for (const [day, values] of Object.entries(days)) {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');
    hoursSection.appendChild(dayDiv);
    // create a heading for the day
    const dayHeading = document.createElement('h2');
    dayHeading.classList.add('day-name');
    dayHeading.textContent = day;
    dayDiv.appendChild(dayHeading);
    const divNumber = document.createElement('div');
    divNumber.classList.add('div-number');
    dayDiv.appendChild(divNumber);
    const divTemp = document.createElement('div');
    divTemp.classList.add('div-temp');
    divNumber.appendChild(divTemp);
    const divImg = document.createElement('div');
    divImg.classList.add('div-img');
    divNumber.appendChild(divImg);
    const divTime = document.createElement('div');
    divTime.classList.add('div-time');
    divNumber.appendChild(divTime);

    // iterate over the values for the day and display them
    values.forEach((value) => {
      const icon = iconsProcessor(value.icon);
      const tempParagraph = document.createElement('p');
      tempParagraph.textContent = `${value.temp}°C`;
      divTemp.appendChild(tempParagraph);
      const iconDiv = document.createElement('img');
      iconDiv.classList.add('icon-hour');
      iconDiv.src = icon;
      divImg.appendChild(iconDiv);

      const timeParagraph = document.createElement('p');
      timeParagraph.textContent = `${value.time}`;
      divTime.appendChild(timeParagraph);
    });
  }
};
// --2. transform the string received to display it later
const transformData = (list) => {
  const daysByWeekday = {}; // create an empty object to store days by weekday
  list.forEach((hour) => {
    const { dt_txt: dtTxt } = hour;
    const { main } = hour;
    const { temp } = main;
    const { weather } = hour;
    const { icon } = weather[0];
    const [fecha, hora] = dtTxt.split(' ');
    const time = hora.slice(0, 5);
    const day = format(parseISO(fecha), 'iiii');
    const newDay = new Days(day, time, temp, icon);
    // group newDay objects by weekday
    if (daysByWeekday[day]) {
      daysByWeekday[day].push(newDay);
    } else {
      daysByWeekday[day] = [newDay];
    }
  });
  renderHours(daysByWeekday);
};
// --1. Async function to get the list of data from the API.
const getFiveDaysWeather = async (coord) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&appid=5157c507d51ade4731309623a34583e2&units=metric`);
  const data = await response.json();
  const { list } = data;

  transformData(list);
};

export default getFiveDaysWeather;
