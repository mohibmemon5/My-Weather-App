// const apiKey = "b122afbb2706fa11a1a3c9f64d1a0921";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");

// async function checkWeather(city){
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//     let data = await response.json();
//     console.log(data);

//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
// }

// searchBtn.addEventListener("click", ()=>{
//     checkWeather(searchBox.value);
// })

//Chat-GPT Code
document.addEventListener("DOMContentLoaded", function () {
    console.log("HTML Content Loeaded Fully.");
    const apiKey = "b122afbb2706fa11a1a3c9f64d1a0921";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

    const searchBox = document.querySelector(".search-input");
    const searchBtn = document.querySelector(".search-btn");
    const weatherIcon = document.querySelector(".weather-icon");

    console.log("All JavaScript Variables Worked Successfully!");
    
    async function checkWeather(city) {
        console.log("Check Weather Function Initiated Successfully!");
        const url = `${apiUrl}&q=${encodeURIComponent(city)}&appid=${apiKey}`;
        const response = await fetch(url);

        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else{
            let data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "assets/clouds.png";
                
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "assets/clear.png";
    
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "assets/rain.png";
    
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "assets/drizzle.png";
    
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "assets/mist.png";
    
            }
            else if(data.weather[0].main == "Humidity"){
                weatherIcon.src = "assets/humidity.png";
    
            }
            else if(data.weather[0].main == "Snow"){
                weatherIcon.src = "assets/snow.png";
    
            }
    
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }

    }

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});
