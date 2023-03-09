import Days from './fivedays.js';

const { parseISO, format } = require('date-fns'); // eslint-disable-line
const hoursSection = document.querySelector('.hour-section');
// -- 3. Render all the data
 const renderHours = (days) => {
  console.log(days)
  
for(let [key, value] of Object.values(days)) {
  const day = value.day;
  console.log(day)
  let html = '';
  html += `
  <h2>{value.day}</h2>
  `;
  hoursSection.innerHTML = html;
}
  
//   dayNames.forEach((dayName) => {
//     const dayContainer = document.createElement('div');
//     dayContainer.classList.add('day-container');
//     dayContainer.textContent = dayName;
//     const dayData = days[dayName];
//     dayData.forEach(({ time, temp }) => {
//       const hourContainer = document.createElement('div');
//       hourContainer.classList.add('hour-container');

//       const timeElement = document.createElement('p');
//       timeElement.classList.add('time');
//       timeElement.textContent = time;
//       hourContainer.appendChild(timeElement);

//       const tempElement = document.createElement('p');
//       tempElement.classList.add('temp');
//       tempElement.textContent = temp;
//       hourContainer.appendChild(tempElement);

//       dayContainer.appendChild(hourContainer);
//     });

//     hours.appendChild(dayContainer);
//   });
};
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
