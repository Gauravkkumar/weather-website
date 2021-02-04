const request = require('postman-request');

const forecast = (lat,longi, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9b6798a68eaa37d66ab0c83abf0a960e&query='+lat+','+longi

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            console.log('Unable to connect to weather service!')
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            console.log('Unable to find location')
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It feels like "+body.current.feelslike +" degress.The humidity level is "+body.current.humidity + "% .There are " + body.current.precip + ' % chances of rain.')
            //      {
            //     summary: response.body.current.weather_descriptions[0],
            //     temperature: response.body.current.temperature,
            //     feelslike:response.body.current.feelslike
            // }
        }
    })
}

module.exports=forecast