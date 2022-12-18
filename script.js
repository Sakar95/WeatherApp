let weather = {
    apikey: "49ceb5d99516f641bb3b97da699cbede",
    getdata: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apikey + "&units=metric")
            .then(response => response.json())
            .then(data => this.displaydata(data))
    },

    displaydata: function (data) {
        const { name } = data;
        const { description, icon } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector(".city").innerText = "Weather in " + name
        document.querySelector(".temp").innerText = temp + "°C"
        document.querySelector(".nature").innerText = description
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%"
        document.querySelector(".windspeed").innerText = "Wind Speed: " + speed + " Km/h"
        // document.querySelector(".image").src="https://openweathermap.org/img/wn/04n@2x.png"
        document.querySelector(".weather").classList.remove("load")
        console.log(name, description, icon, temp, humidity, speed);


    },

    search: function () {
        this.getdata(document.querySelector(".search-bar").value)
    }

}

document.querySelector(".search-button").addEventListener("click", function () {
    weather.search();
})
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();

    }
})


