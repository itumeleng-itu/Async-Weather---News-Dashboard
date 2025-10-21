"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function getWeather(cityName) {
    const apiKey = "2a06182ec57b0915b19dc29187556666";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 400) {
                console.log("please retype city");
            }
            throw new Error("couldnt fetch");
        }
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (err) {
        console.error("error fetching data", err);
    }
}
// getWeather("Polokwane")
async function getNews(topic) {
    const apiKey = "f485907cb4e04054958569e5a6b84d3a";
    const url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 400) {
                console.log("please retype city");
            }
            throw new Error("couldnt fetch");
        }
        const data = await response.json();
        const article = data.articles[0];
        console.log(article);
        return article;
    }
    catch (err) {
        console.error("error fetching data", err);
    }
}
//getNews("tech")
async function processAllInfo() {
    try {
        console.log("fetching weather");
        const weather = await getWeather("Polokwane");
        console.log("===========================================");
        console.log("coffee and magwinya? while waiting for your newspaper?");
        const news = await getNews("tech");
        console.log("And just like that, we are done");
    }
    catch (error) {
        console.error("an error occured", error);
    }
}
processAllInfo();
//# sourceMappingURL=asyncAwaitVersion.js.map