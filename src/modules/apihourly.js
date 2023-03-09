import Days from './fivedays.js';

const { parseISO, format } = require('date-fns'); // eslint-disable-line
const hoursSection = document.querySelector('.hour-section');
// -- 3. Render all the data
 const renderHours = (days) => {
    for (const [day, values] of Object.entries(days)) {
      // create a new div for each day
      const dayDiv = document.createElement('div');
      dayDiv.classList.add('day');

      // create a heading for the day
      const dayHeading = document.createElement('h2');
      dayHeading.textContent = day;
      dayDiv.appendChild(dayHeading);

      // iterate over the values for the day and display them
      for (const value of values) {
        const tempParagraph = document.createElement('p');
        tempParagraph.textContent = `Temperature: ${value.temp}`;
        dayDiv.appendChild(tempParagraph);

        const timeParagraph = document.createElement('p');
        timeParagraph.textContent = `Time: ${value.time}`;
        dayDiv.appendChild(timeParagraph);
      }

      // add the day div to the document
      document.body.appendChild(dayDiv);
    }
  }
// --2. transform the string received to display it later
const transformData = (list) => {
  const daysByWeekday = {}; // create an empty object to store days by weekday
  list.forEach((hour) => {
    const { dt_txt: dtTxt } = hour;
    const { main } = hour;
    const { temp } = main;
    const [fecha, hora] = dtTxt.split(' ');
    const time = hora.slice(0, 5);
    const day = format(parseISO(fecha), 'iiii');
    const newDay = new Days(day, time, temp);
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
