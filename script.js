let weather = {
    apiKey:"e619349c68f566ad88cfb2e877d09e43",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+ this.apiKey
        )
        .then((response) => response.json())
        .then((data)=> console.log(data));
    },
    displayWeather: function(data) {

    }
}