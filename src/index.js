import _ from 'lodash';
import './style.css';
 const key =  '5157c507d51ade4731309623a34583e2';
 const urlWeather =  'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';
 const urlGeoloc = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}`
 const form = document.querySelector('.form');
 const locationInput = document.querySelector('.location-input');



 const getData = async () => {

 }


 const getGeo = async (location) => {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${key}`);
  const data = await response.json();
  console.log(data)
 }
 
 form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const location  = locationInput.value;
  if(location){
    //remove spaces from the begining and end, and after or before a coma. 
    getGeo(location.trim().split(/\s*,\s*/).join('+'));
  }
 })

