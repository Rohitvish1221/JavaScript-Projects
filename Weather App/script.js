const button = document.getElementById("search-button")
const input = document.getElementById("city-input")
const cityName = document.getElementById("city-name")
const cityTime = document.getElementById("city-time")
const cityTemp = document.getElementById("temperature")

async function getData(cityName){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=86f296cb377c4181bb9100432251405&q=${cityName}&aqi=yes`);
    return await promise.json()
}
button.addEventListener('click', async ()=>{
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name} , ${result.location.region} - ${result.location.country}`;
    cityTime.innerText = `Time : ${result.location.localtime}`;
    cityTemp.innerText = `Temperature : ${result.current.temp_c}`;
}) 

//http://api.weatherapi.com/v1/current.json?key=86f296cb377c4181bb9100432251405&q=London&aqi=yes
