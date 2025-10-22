"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiConfig_1 = require("./apiConfig");
function fetchWeatherData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Besig om weerdata te laai");
            const wData = (0, apiConfig_1.getWeather)("Polokwane");
            resolve(wData);
        }, 7000);
    });
}
function fetchNews() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Besig om nuusdata te laai");
            const wData = (0, apiConfig_1.getNews)("technology");
            resolve(wData);
        }, 7000);
    });
}
Promise.all([fetchWeatherData(), fetchNews()])
    .then(([weather, news]) => {
    console.log("\n✅ weerdata:");
    console.log(weather);
    console.log("\n📰 nuusdata:");
    console.log(news);
})
    .catch(err => console.error("Fout tydens die ophaal van data:", err));
Promise.race([fetchWeatherData(), fetchNews()])
    .then((first) => {
    console.log("\nEerste data ontvang:");
    console.log(first);
})
    .catch(err => console.error("Fout tydens die ophaal van data:", err));
//# sourceMappingURL=promiseVersion.js.map