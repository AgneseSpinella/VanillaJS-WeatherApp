let weather = {
    "apiKey":"e619349c68f566ad88cfb2e877d09e43",
    fetchWeather: function() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=e619349c68f566ad88cfb2e877d09e43")
        .then((response) => response.json())
        .then((data)=> console.log(data));
    }
}