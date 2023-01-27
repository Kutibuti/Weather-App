const searchBar = document.querySelector(".search-bar")
const searchBtn = document.querySelector(".search-btn")
let weather = {
    apiKey: null, // Put your api key here,
    fetchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data) {
        const { name } = data
        const { icon, description } = data.weather[0]
        const { temp, humidity } = data.main
        const { speed } = data.wind
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city-el").innerText = `Weather in ${name}`
        document.querySelector(".temp-el").innerText = `${temp}°C`
        document.querySelector(".icon-el").src = `https://openweathermap.org/img/wn/${icon}.png`
        document.querySelector(".description-el").innerText = description
        document.querySelector(".humidity-el").innerText = `Humidity: ${humidity}%`
        document.querySelector(".wind-el").innerText = `Wind speed ${speed}km/h`
    }
}

searchBtn.addEventListener("click", () => {
    weather.fetchWeather(searchBar.value)
})