import { getWeather, getNews } from "./apiConfig"

function fetchWeatherData(): Promise<object>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Besig om weerdata te laai");
            const wData = getWeather("Polokwane")
            resolve(wData)
        },7000) ;
    })
}

function fetchNews(): Promise<object> {

    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Besig om nuusdata te laai");
            const wData = getNews("technology")
            resolve(wData)
        },7000) ;
    });
}

Promise.all([fetchWeatherData(), fetchNews()])
  .then(([weather, news]) => { //Promise.all rresolves with the value of all promises at the same time.
    console.log("\n✅ weerdata:");
    console.log(weather);
    console.log("\n📰 nuusdata:");
    console.log(news);
  })
  .catch(err => console.error("Fout tydens die ophaal van data:", err));


  Promise.race([fetchWeatherData(), fetchNews()])
  .then((first) => { // Promise.race resolves with the value of the first promise that settles
    console.log("\nEerste data ontvang:");
    console.log(first);
  })
  .catch(err => console.error("Fout tydens die ophaal van data:", err));