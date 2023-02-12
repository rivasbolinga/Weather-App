const { parseISO, format } = require('date-fns');
const hours = document.querySelector('.hours')
//-- 3. Change time with date fns library
const changeTime = (dateTimes) => {
  const groupedByDate = dateTimes.reduce((result, dateTimeString) => {
    const date = format(parseISO(dateTimeString), 'yyyy-MM-dd');
    if (result[date]) {
      result[date].push(dateTimeString);
    } else {
      result[date] = [dateTimeString];
    }
    return result;
  }, {});
  
  takeDay(groupedByDate); // and object of arrays of the date with their hours
}
//-- 2. Loop to build an array with all the time data and take the temperature data.
const getValuesperH = async (list) => {
  let times = [];
  for(let i = 0; i < list.length; i++)
 {
  const { temp } = list[i].main;
  const time = list[i].dt_txt;
  times.push(time)
 }
 changeTime(times);
}
//--1. Async function to get the list of data from the API.
const getFiveDaysWeather = async (coord) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&appid=5157c507d51ade4731309623a34583e2&units=metric`);
  const data = await response.json();
 const { list } = data;
 getValuesperH(list);
};
//-- function to take the 5 next days of weather;
const takeDay = (obj) => {
  console.log(obj)
  let days = Object.keys(obj);
  return days;
}



const renderHourly = (time, temp) => {
  let html = '' ;
  html += `<div class="hour-container">
  <p class="hour">${time}</p>
  <p class="degrees">${temp}°C</p>
</div>`;
hours.innerHTML = html;
}
export default getFiveDaysWeather;