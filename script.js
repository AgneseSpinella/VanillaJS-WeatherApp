let weather = {
    apiKey:"e619349c68f566ad88cfb2e877d09e43",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+ this.apiKey
        )
        .then((response) => response.json())
        .then((data)=> this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } =  data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Meteo a " + name;
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "K";
        document.querySelector(".humidity").innerText = "Umidità: " + humidity + "%";
        document.querySelector(".speed").innerText = "Velocità del vento: " + speed + "km/h";

    }
}
