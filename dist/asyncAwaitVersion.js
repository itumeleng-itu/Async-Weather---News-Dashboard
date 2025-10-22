"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiConfig_1 = require("./apiConfig");
async function processAllInfo() {
    try {
        console.log("fetching weather");
        const weather = await (0, apiConfig_1.getWeather)("Polokwane");
        console.log("===========================================");
        console.log("coffee and magwinya? while waiting for your newspaper?");
        const news = await (0, apiConfig_1.getNews)("tech");
        console.log("And just like that, we are done");
    }
    catch (error) {
        console.error("It seems we're running into a bit of an erorr, our technical are on this, rest assured", error);
    }
}
processAllInfo();
//# sourceMappingURL=asyncAwaitVersion.js.map