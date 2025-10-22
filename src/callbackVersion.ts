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
        console.error("dit is 'n probleem, maar wag terwyl ons dit ondersoek")
    }
    if(newsData){
        console.log("")
        console.log("")
        console.log(`☕ vetkoek and koffie terwyl ek op jou nuus wag ?`);
        console.log("")
        console.log("")
        console.log("jou nuus is hier, geniet 📰 ");
        console.log("=================================================")
        console.log(newsData);
    }
})