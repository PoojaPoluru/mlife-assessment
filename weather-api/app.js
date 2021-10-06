const weatherAPI = require('./weather')
const db = require('./db')
const config = require('./config.json')


const api_key = config.api.api_key
const api_url = config.api.api_url

var city_name = config.city_name


const asyncAPICall = async() => {
    const response = await weatherAPI.weatherData(api_url, city_name, api_key);  //Get response from weather API
    if (response) {
        let data = response.data;
        var values = [city_name]

        if (data.main) {
            var temp = data.main.temp;
            temp = temp - 273.15;      // convert temprature from Kelvin to Celsius
            values.push(temp);
        }
        if (data.weather[0]) {
            var description = data.weather[0].description;
            values.push(description);
        }

        // Store the response in the database
        db.queryData(values);
        
    }
}


asyncAPICall()
