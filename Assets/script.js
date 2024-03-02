const APIkey = "87d8dfa5cc0bd7f79da6f60c8913df76"


// variables for lat and lon, will be assigned in function for lat and lon from city
var lat;
var lon;
// sets a default city to search for and populate page with
var city;
// selects element where current forecast will display
var currentDayDiv = document.querySelector('.current');
// selects elements where future forecasts will display
var extendedForcastDiv = document.querySelectorAll('.extended');
// variable for assigining future forecats to a card
var cardCount = 0;
var submitEl = document.querySelector('#submit-location');
var searchInput = document.querySelector("#location")
// selects element where the searched cities will display
var searchedCities = document.querySelector('.searchedCities');
// variable for saving to and writing from local storage
var searchedCitiesEl = [];

function handleSearch(event) {
    var city = searchInput.value
    getCurrentWeather(city)
    searchInput.value = ""
}

function getCurrentWeather(city) {
    var apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${APIkey}&q=${city}&units=imperial`;
    fetch(apiUrlWeather).then(res => res.json()).then(data => {
        console.log(data)
        renderCurrentWeather(data)
        const { lat, lon } = data.coord
        var apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIkey}`;
        fetch(apiUrlForecast).then(res => res.json()).then(data => {
            console.log(data)
        })
    })
}
// 
function renderCurrentWeather(data){
    document.querySelector("#city-name").textContent = data.name
    document.querySelector("#date").textContent = dayjs.unix(data.dt).format("MM/DD/YYYY")
    document.querySelector("#icon").src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.querySelector("#temp").textContent = data.main.temp +" F"
    document.querySelector("#hum").textContent = data.main.humidity +" %"
    document.querySelector("#wind") .textContent = data.wind.speed +" mph"
}
// display cards
function renderForecastData(data) {
    const forecastel=document.querySelector("#forecast")
    forecastel.innerHTML = ""
    // jumps the array. that checks time every 3 hours.
    for (let i=3; i<data.list.length;i+=8){
    const dateel=document.createElement("h3")
    dateel.textContent=dayjs.unix(data.list[i].dt).format("MM/DD/YYYY")
    const iconel=document.createElement("img")
    iconel.src=`https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`
    const tempel = document.createElement("p")
    tempel.textContent=data.list[i].main.temp+" F"  
    const hum=document.createElement("p")
    hum.textContent=data.list[i].main.humidity +" %"
    const wind =document.createElement("p")
    wind.textContent=data.list[i].wind.speed + " mph"
    
}
    
}

// event listener 
submitEl.addEventListener("click", handleSearch)
