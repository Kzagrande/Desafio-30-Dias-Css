let weather  = {
    apiKey: "97d5c5d8b50063fd42201ef558b7e959",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            +city
            +"&units=metric&appid=" 
            + this.apiKey
        )

        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".card__nameCity").textContent = "Weather in " + name;
        document.querySelector(".card__icon").src="https://openweathermap.org/img/wn/"+icon+".png"
        document.querySelector(".card__description").textContent = description;
        document.querySelector(".card__temp").textContent = Number(temp).toFixed(.5) + " ºC ";
        document.querySelector(".card__humidity").textContent = " Humidity "+ humidity + " % ";
        document.querySelector(".card__whind").textContent = "Whind "+ speed + " km/h ";
        document.querySelector(".card__weather").classList.remove("card__loading");

    
        

    },
    search:function(){
        this.fetchWeather(document.querySelector(".card__search-bar").value);
    }

};

document
.querySelector(".btn__search")
.addEventListener("click",function(){
    weather.search();
});
document
.querySelector(".card__search-bar")
.addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    }

});

weather.fetchWeather("Guarulhos");