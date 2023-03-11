export default class Weather {
  constructor(name, country, description, degrees, feel, humidity, wind, icon) {
    this.name = name;
    this.country = country;
    this.description = description;
    this.degrees = degrees;
    this.feel = feel;
    this.humidity = humidity;
    this.wind = wind;
    this.icon = icon;
  }
}