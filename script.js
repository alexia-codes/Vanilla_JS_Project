let now = new Date();
let h3 = document.querySelector("#date");
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = days[now.getDay()];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = months[now.getMonth()];
let currentDate = now.getDate();
let currentYear = now.getFullYear();
h3.innerHTML = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;

function displayTime() {
    if (now.getMinutes() < 10) {
        return "0" + now.getMinutes();
    } else {
        return now.getMinutes();
    }
}
let hours = now.getHours();
let h2 = document.querySelector("#time");
h2.innerHTML = `${hours}:${displayTime()}`;

function displayTemperature(response) {
    let temperature = document.querySelector("h4");
    let h4 = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(response.data.main.temp)}°
    C`;
}

function search(event) {
    event.preventDefault();
    let locationInput = document.querySelector("#location-input");
    let location = document.querySelector("#location");
    location.innerHTML = locationInput.value;
    let apiKey = "cf96ae07a91844c140556e9c95593114";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&units=metric&appid=${apiKey}&units=metrics`;
    console.log(apiUrl);

    axios.get(apiUrl).then(displayTemperature);
}

let searchLocation = document.querySelector("#location-search");
searchLocation.addEventListener("submit", search);