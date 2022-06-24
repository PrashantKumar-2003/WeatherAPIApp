let weather = {
    "apiKey": "99fb37e72e72a3e25a45385e7c8721a5",
    fetchweather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
            .then(response => response.json())
            .then(data => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const icon_Api = "http://openweathermap.org/img/wn/" + icon + ".png";
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerHTML = "Weather in "+name;
        document.querySelector(".icon").src = icon_Api;
        document.querySelector(".temperature").innerText = temp + "°C";
        document.querySelector(".condition").innerText = description;
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".speed").innerHTML = "Wind Speed: "+speed + " km/h";
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
    },
    search : function(){
        this.fetchweather(document.querySelector(".search-bar").value);
    }
};
let searchbtn = document.querySelector(".search");
searchbtn.addEventListener("click", function (e) {
    e.preventDefault();
    weather.search();
    document.querySelector(".search-bar").value = "";
    });