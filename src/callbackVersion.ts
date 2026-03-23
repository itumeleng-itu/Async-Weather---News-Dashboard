import { getWeather, getNews } from "./apiConfig"

function fetchWeatherData(callback: (error:Error|null, weatherData :object)=>void){
    console.log("🌦️ Fetching weather data...")
    setTimeout(async()=>{
        const wData = getWeather("Polokwane")
        callback(null,  wData)
    },3000)
}

function fetchNews(callback:(error:Error|null, newsData: object)=>void){
    
    setTimeout(async()=>{
        const nData = getNews("technology")
        callback(null, nData)
    },6000)  
}

fetchWeatherData((error,weatherData) =>{
    if(error){
        console.error("Fetching error");
    }
    if(weatherData){
        console.log("Ah, would you look at that, the weather data is here 🌏🌖");
        console.log("---------------------------------------------------------------")
        console.log(weatherData);
    }
})


fetchNews ((error, newsData )=>{
    if(error){
        console.error("There is a problem, please wait while we investigate.")
    }
    if(newsData){
        console.log("")
        console.log("")
        console.log(`☕ donut and coffee while I wait for your news?`);
        console.log("")
        console.log("")
        console.log("Your news is here, enjoy! 📰 ");
        console.log("=================================================")
        console.log(newsData);
    }
})