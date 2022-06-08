const resolvers = {
  Query: {
    // Weather forecast for the next 5 days / 3 hours
    forecast(_, { city }, { dataSources }) {
      return dataSources.weatherAPI.getForecast(city)
    },

    currentWeather(_, { city }, { dataSources }) {
      return dataSources.weatherAPI.getCurrentWeather(city)
    }
  }
};

module.exports = resolvers;
