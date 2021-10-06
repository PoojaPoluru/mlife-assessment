const {Client} = require('pg');
const config = require('./config.json')

const client = new Client(config.database);  //Connection to the database

client.connect()
    .then(() => console.log('Connected to db'))
    .catch((err) => console.log('Connection error ', err.message))  //error handling if connection fails


var queryString = `insert into weatherdata (cityname, temperature, description) values ($1, $2, $3)`  

module.exports = {
    // Insert weather info to database
    queryData : (values) => client.query(queryString, values, (error, res) => {
        if (!error) {
            console.log('Successfully inserted data');
        }
        else {
            console.log(error.message);
        }
        client.end();
    })
}
