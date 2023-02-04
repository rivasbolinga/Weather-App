import _ from 'lodash';
import './style.css';
 const key =  '5157c507d51ade4731309623a34583e2';
 const urlWeather =  'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';
 const urlGeoloc = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}`
  
 const city = 'Madrid';
 const getData = async () => {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`);
  const data = await response.json();
  console.log(data)
 }
 getData();
