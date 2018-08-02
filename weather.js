class Weather {
    constructor(city, countryCode){
        this.apiKey = '67c78c742164441d2cf01c35db769376';
        this.city = city;
        this.countryCode = countryCode;
    }


    //Fetch weather app
    async getWeather() {
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apiKey}`)

        const responseData = await response.json();

        return responseData
    }

    //Change weather location
    changeLocation(city, countryCode){
        this.city = city;
        this.countryCode = countryCode;
    
    }
}

