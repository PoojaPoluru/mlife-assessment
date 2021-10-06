

# Problem 1

**Directory name** --> python-script

### Steps to execute the script

> Test_Files directory contains all the input csv files and the output Combined.csv file. Make changes to this files for testing purposes.

> To run the script execute **python3 script.py** from the parent directory. (python-script)


# Problem 2

**Directory name** --> weather-api

### Technologies Used

Node.js, PostgreSQL

### Description

> The implementation takes the city name and gets the weather information from API and stores it in the database. Used Node.js in the backend and postgreSQL for the database.

> Used the OpenweatherAPI for getting the weather data. (https://openweathermap.org/api)

### Steps to run the application
> Make sure you have postgres installed.
 
> Run the command psql -h hostname -U username -f weatherapp_ddl.sql to create the database. (Replace hostname and username parameters)

> City name should be provided in the config.json file along with the database user and password information. Also provide the api_key.

> execute **node app.js** from the parent folder (weather-app) 


### Result

> psql weatherapp

> select * from weatherdata;

<img width="585" alt="Screen Shot 2021-10-05 at 5 45 44 PM" src="https://user-images.githubusercontent.com/22628620/136123245-759a75d7-21f9-4ffe-9d58-d54d3b703d18.png">





