let iVal = document.querySelector('.cityName');
let tempImg = document.querySelector('.temp-img');
let temp = document.querySelector('.temperature');
let cityName = document.querySelector('.city-name');
let windspeed = document.querySelector('.wind');
let humidity = document.querySelector('.humidityCount');
let btn = document.querySelector('.btn');
let a1 = "mumbai"

btn.addEventListener('click', () =>{

    if(iVal.value == ''){
        alert('Input cannot be empty')
    }
    
    else{
   
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${iVal.value}&appid=4cb85b9478d9244452483de78c527de9&units=metric`;

        fetch(url).then(function(response){
        response.json().then(function(data) {
        console.log(data.weather[0].main);
        temp.innerHTML =Math.round(data.main.temp) + "ºC"
        cityName.innerHTML = iVal.value;
        windspeed.innerHTML = data.wind.speed + " km/hr";
        humidity.innerHTML = data.main.humidity + "%";

       if(data.weather[0].main == "Clouds"){
        tempImg.src = "images/clouds.png"
       }

       else if(data.weather[0].main == "Clear"){
        tempImg.setAttribute("src","images/clear.png")
       }

       else if(data.weather[0].main == "Haze"){
        tempImg.setAttribute("src","images/mist.png")
       }

       else if(data.weather[0].main == "Rain"){
        tempImg.setAttribute("src","images/rain.png")
       }

       else if(data.weather[0].main == "Snow"){
        tempImg.setAttribute("src","images/snow.png")
       }

    });
        }).catch(function(error) {
            console.log('Fetch Error:', error);
            console.log("no city found")
        });
        
    }
})


