export async function getWeather(cityName:string | null) {
    const apiKey ="2a06182ec57b0915b19dc29187556666";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try{
        const response = await fetch (url)
        if(!response.ok){
            if(response.status===400){
                console.log("please retype city")
            }
            throw new Error("couldnt fetch")
        }
        const data = await response.json();
        console.log(data)
        return data;
    }
    catch(err:any){
        console.error("error fetching data", err)
    }
}
// getWeather("Polokwane")

export async function getNews(topic:string | null) {
    const apiKey ="f485907cb4e04054958569e5a6b84d3a";
    const url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;

    try{
        const response = await fetch (url)
        if(!response.ok){
            if(response.status===400){
                console.log("please retype city")
            }
            throw new Error("couldnt fetch")
        }
        const data = await response.json();

        const article = data.articles[0];
        console.log(article)
        return article;
    }
    catch(err:any){
        console.error("error fetching data", err)
    }
}
//getNews("tech")
