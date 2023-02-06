export default class Weather {
  constructor(name,description, degrees,feel,humidity,wind, precip) 
  {
    this.name = name;
    this.description = description;
    this.degrees = degrees;
    this.feel = feel;
    this.humidity = humidity;
    this.wind = wind;
    this.precip = precip;
  }
}