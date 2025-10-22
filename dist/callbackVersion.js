"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiConfig_1 = require("./apiConfig");
function fetchWeatherData(callback) {
    console.log("🌦️ Fetching weather data...");
    setTimeout(async () => {
        const wData = (0, apiConfig_1.getWeather)("Polokwane");
        callback(null, wData);
    }, 3000);
}
function fetchNews(callback) {
    setTimeout(async () => {
        const nData = (0, apiConfig_1.getNews)("technology");
        callback(null, nData);
    }, 6000);
}
fetchWeatherData((error, weatherData) => {
    if (error) {
        console.error("Fetching error");
    }
    if (weatherData) {
        console.log("Ah, would you look at that, the weather data is here 🌏🌖");
        console.log("---------------------------------------------------------------");
        console.log(weatherData);
    }
});
fetchNews((error, newsData) => {
    if (error) {
        console.error("dit is 'n probleem, maar wag terwyl ons dit ondersoek");
    }
    if (newsData) {
        console.log("");
        console.log("");
        console.log(`☕ vetkoek and koffie terwyl ek op jou nuus wag ?`);
        console.log("");
        console.log("");
        console.log("jou nuus is hier, geniet 📰 ");
        console.log("=================================================");
        console.log(newsData);
    }
});
//# sourceMappingURL=callbackVersion.js.map