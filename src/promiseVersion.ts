import { getWeather, getNews } from "./apiConfig"

function fetchWeatherData(): Promise<object>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Busy loading weather data...");
            const wData = getWeather("Polokwane")
            resolve(wData)
        },7000) ;
    })
}

function fetchNews(): Promise<object> {

    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Busy loading news data...");
            const wData = getNews("technology")
            resolve(wData)
        },7000) ;
    });
}

Promise.all([fetchWeatherData(), fetchNews()])
  .then(([weather, news]) => { //Promise.all rresolves with the value of all promises at the same time.
    console.log("\n✅ Weather Data:");
    console.log(weather);
    console.log("\n📰 News Data:");
    console.log(news);
  })
  .catch(err => console.error("Error while fetching data:", err));


  Promise.race([fetchWeatherData(), fetchNews()])
  .then((first) => { // Promise.race resolves with the value of the first promise that settles
    console.log("\nFirst data received:");
    console.log(first);
  })
  .catch(err => console.error("Error while fetching data:", err));