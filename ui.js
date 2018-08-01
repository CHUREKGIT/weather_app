class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-desc');
        this.tempString = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }
paint(weather){
    this.location.textContent = weather.name;
    this.description.textContent = weather.weather[0].main;
    this.tempString.textContent = `${Math.round(weather.main.temp/10)}'C`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.details.textContent = weather.weather.description;
    this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
    this.dewpoint.textContent = `Cloudiness: ${weather.clouds.all} %`;
    this.feelsLike.textContent = `Pressure: ${weather.main.pressure} hPa`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
}
}