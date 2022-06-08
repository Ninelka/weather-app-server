const { RESTDataSource } = require("apollo-datasource-rest");

class WeatherAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.openweathermap.org/data/2.5/";
  }

  getForecast(city) {
    return this.get(
      `forecast?q=${city}&appid=${process.env.API_KEY}&units=metric`
    );
  }

  getCurrentWeather(city) {
    return this.get(
      `weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
    );
  }
}

module.exports = WeatherAPI;
