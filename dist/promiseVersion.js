"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiConfig_1 = require("./apiConfig");
function fetchWeatherData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Busy loading weather data...");
            const wData = (0, apiConfig_1.getWeather)("Polokwane");
            resolve(wData);
        }, 7000);
    });
}
function fetchNews() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Busy loading news data...");
            const wData = (0, apiConfig_1.getNews)("technology");
            resolve(wData);
        }, 7000);
    });
}
Promise.all([fetchWeatherData(), fetchNews()])
    .then(([weather, news]) => {
    console.log("\n✅ Weather Data:");
    console.log(weather);
    console.log("\n📰 News Data:");
    console.log(news);
})
    .catch(err => console.error("Error while fetching data:", err));
Promise.race([fetchWeatherData(), fetchNews()])
    .then((first) => {
    console.log("\nFirst data received:");
    console.log(first);
})
    .catch(err => console.error("Error while fetching data:", err));
//# sourceMappingURL=promiseVersion.js.map