const apiKey = "a3d691d5d41e4c3a91372640253107";
const weatherCard = document.getElementById("weatherCard");

function getWeather() {
  const location = document.getElementById("locationInput").value;
  if (!location) {
    alert("Please enter a location");
    return;
  }

  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("cityName").textContent = data.location.name + ", " + data.location.country;
      document.getElementById("temperature").textContent = data.current.temp_c;
      document.getElementById("humidity").textContent = data.current.humidity;
      document.getElementById("windSpeed").textContent = data.current.wind_kph;
    })
    .catch(error => {
      alert("Failed to fetch weather data. Check the location or try again.");
      console.error(error);
    });
}

// Dark mode toggle
const toggleBtn = document.getElementById("toggle-dark");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Live clock
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();
