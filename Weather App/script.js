const apiKey = "45801e34591e4e438cbff44e761dd4c4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const main = document.getElementById('main');

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404){
            document.querySelector('.error').style.display = 'block';
            document.querySelector('.weather').style.display = 'none';
        }
        else{

            var data = await response.json();

            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
            document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
            document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

            if(data.weather[0].main == 'Clouds'){
                weatherIcon.src = 'images/clouds.png';
                main.classList.add('cloud');
            }
            else if(data.weather[0].main == 'Clear'){
                weatherIcon.src = 'images/clear.png';
                main.classList.add('clear');
            }
            else if(data.weather[0].main == 'Rain'){
                weatherIcon.src = 'images/rain.png';
                main.classList.add('rain');
            }
            else if(data.weather[0].main == 'Drizzle'){
                weatherIcon.src = 'images/drizzle.png';
                main.classList.add('drizzle');
            }
            else if(data.weather[0].main == 'Mist'){
                weatherIcon.src = 'images/mist.png';
                main.classList.add('mist');
            }
            else if(data.weather[0].main == 'Haze'){
                weatherIcon.src = 'images/haze.png';
                main.classList.add('haze');
            }
    
            document.querySelector('.weather').style.display = 'block';
             document.querySelector('.error').style.display = 'none';
        }
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})

checkWeather();

