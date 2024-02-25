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
var searchInput = document.querySelector('#citySearchField');
var submitEl = document.querySelector('#submit-location');
var searchInput = document. querySelector("#location")
// selects element where the searched cities will display
var searchedCities = document.querySelector('.searchedCities');
// variable for saving to and writing from local storage
var searchedCitiesEl = [];

function handleSearch(event){
    
}