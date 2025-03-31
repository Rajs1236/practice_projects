const apikey = "e2ea7156b69c164ebbeb5b2754552955";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const reset=document.getElementById("reset")
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");
async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();

  
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°C";
  document.querySelector(".humid").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

if(data.weather[0].main==="clouds"){
weathericon.src="clouds.jpeg";
}
else if(data.weather[0].main==="clear"){
    weathericon.src="clear.png";
}
else if(data.weather[0].main==="Rain"){
  weathericon.src="rain.jpeg";
}
else if(data.weather[0].main==="Drizzle"){
  weathericon.src="drzl.png";
}
else if(data.weather[0].main==="Mist"){
  weathericon.src="mist.png";
}
document.querySelector(".weather").style.display="block";
}

searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});

// Listen for Enter key press
searchbox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkweather(searchbox.value);
  }
});
reset.addEventListener("click",()=>{
  searchbox.value="";
  alert("webpage reloaded");
  window.location.reload();
})