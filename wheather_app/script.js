let result = document.getElementById("result");
let searchBtn = document.getElementById("search-button");
let cityRef = document.getElementById("city");


async function getData(cityName){
    let data = await fetch(`http://api.weatherapi.com/v1/current.json?key=59b502a3078b48b6ad1185533250301&q=${cityName}&aqi=yes`);
    return await data.json();
}
searchBtn.addEventListener('click',async()=>{
    const cityValue = cityRef.value.trim();
    if (cityValue.length === 0) {
        result.innerHTML = `<h3 class = "msg">Please enter a city name.</h3>`;
        return;  
    }

    try {
        const final_result = await getData(cityValue);

        
        const location = final_result.location;
        const current = final_result.current;
        const weather_icons = final_result.current.condition.icon;

        
        result.innerHTML = `
            <h2>Weather in ${location.name}, ${location.country}</h2>
            <img src="${weather_icons}" alt="Weather Icon">
            <h1> ${current.temp_c} °C</h1>
            <h4>Feels like: ${current.feelslike_c} °C</h4>
            <p>Condition: ${current.condition.text}</p>
        `;

    } catch (error) {
        console.error("Error fetching weather data:", error);
        result.innerHTML = `<h3 class = "msg" >Error: Could not retrieve weather data.</h3>`;
    }

})
