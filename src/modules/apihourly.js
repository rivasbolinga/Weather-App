const { parseISO, format } = require('date-fns');
const hours = document.querySelector('.hours')
const getWeatherperHour = async (coord) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&appid=5157c507d51ade4731309623a34583e2&units=metric`);
  const data = await response.json();
 const { list } = data;
 getValuesperH(list)
 return list;
};

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
  
  console.log(groupedByDate);
}
const getValuesperH = async (list) => {
  let times = [];
  for(let i = 0; i < list.length; i++)
 {
  console.log(list[i].main)
  const { temp } = list[i].main;

  const time = list[i].dt_txt;
  times.push(time)
 }
 changeTime(times);
}
const renderHourly = (time, temp) => {
  let html = '' ;
  html += `<div class="hour-container">
  <p class="hour">${time}</p>
  <p class="degrees">${temp}°C</p>
</div>`;
hours.innerHTML = html;
}
export default getWeatherperHour;