const apiKey ="b9dc9d5266a1ca490227a21f0d7ffa3e"
const covertToCelcius=(temp)=>{
const result=`${(temp- 273.15).toFixed(1)}°C`;
return result
}
const showWeather=(weather)=>{
    console. log (weather)
    const city = document.getElementById("CityName");
    const country= document.getElementById("Country");
    const clounds= document.getElementById("Clouds");
    const temperture= document.getElementById("Temperature");
    const temperturemin=document.getElementById("Temperaturemin")
    const temperturemax= document.getElementById("Temperaturemax");
    city.textContent=weather.name;
    country.textContent= weather.sys.country;
    clounds.textContent=weather.clouds.all;
    temperture.textContent=covertToCelcius(weather.main.temp);
    temperturemin.textContent= covertToCelcius(weather.main.temp_min)
    temperturemax.textContent=covertToCelcius(weather.main.temp_max)
}
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const getWatherByLocation=(info)=>{
    const lon = info.coords.longitude;
    const lat = info.coords.latitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch (url)
    .then((res)=>res.json())
    .then((res)=>showWeather(res))
}

 const getMyLocation = ()=> {
        navigator.geolocation.getCurrentPosition((pos)=>getWatherByLocation(pos))
 }
getMyLocation();
