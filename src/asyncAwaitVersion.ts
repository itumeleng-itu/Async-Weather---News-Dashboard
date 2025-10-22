import { getWeather, getNews } from "./apiConfig"

async function processAllInfo(): Promise<void> {
    try{
        console.log("fetching weather")
        const weather = await getWeather("Polokwane")
        console.log("===========================================")
        console.log("coffee and magwinya? while waiting for your newspaper?")
        const news = await getNews("tech")
        console.log("And just like that, we are done")
    }
    catch(error){
        console.error("It seems we're running into a bit of an erorr, our technical are on this, rest assured", error);
    }
}
processAllInfo()