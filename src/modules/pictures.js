

const pictureProcessor = (icon) => {
  console.log(icon)
if(icon === '01d' ){
  document.body.classList.add('sunny');
} if (icon === "02d") {
  document.body.classList.add("clouds");
}
if (icon === "03d") {
  document.body.classList.add("cloudy");
}
if (icon === "04d") {
  document.body.classList.add("grey");
}
if (icon === "09d") {
  document.body.classList.add("rain");
}
if (icon === "10d") {
  document.body.classList.add("rain-sun");
}
if (icon === "11d") {
  document.body.classList.add("storm");
}
if (icon === "13d") {
  document.body.classList.add("snow");
}
if (icon === "50d") {
  document.body.classList.add("wind");
}
if (icon === "01n" || icon === "02n" || icon === "03n" || icon === "04n") {
  document.body.classList.add("night");
}
if (icon === "09n") {
  document.body.classList.add("rain-night");
}
if (icon === "10n") {
  document.body.classList.add("rainy-night");
}
if (icon === "11n") {
  document.body.classList.add("storm-night");
}
if (icon === "13n") {
  document.body.classList.add("wind-night");
}
if (icon === "50n") {
  document.body.classList.add("snow-night");
}
}

export default pictureProcessor