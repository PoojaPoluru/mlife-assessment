const axios = require("axios");




module.exports = {
    weatherData : (apiUrl, cityName, apiKey) => axios.get(
        apiUrl,{
            params: {
                q: cityName,
                appid: apiKey
            }
        }
    )
    .then(response => {
        return response
    })
    .catch(error => {
        console.log(error.message);
    })
}