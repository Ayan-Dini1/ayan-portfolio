const apiKey = 'your-api-key-here';
function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const result = document.getElementById('weatherResult');
  if (!city) {
    result.innerHTML = 'Please enter a city name.';
    return;
  }
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) throw new Error('City not found');
      return response.json();
    })
    .then(data => {
      result.innerHTML = `
        <h3>${data.name}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    })
    .catch(error => {
      result.innerHTML = 'Weather data not found.';
    });
}
