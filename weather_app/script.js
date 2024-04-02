const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9494d37016msh269c2f3c922e3d2p1391a9jsn6b826fc9ee99",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
function getWeather(city) {
  cityName.innerHTML = city;
  const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
    })
    .catch((err) => console.log(err));
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Mumbai");
