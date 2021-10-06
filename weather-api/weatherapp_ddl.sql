CREATE DATABASE weatherapp;

create table weatherdata (id serial not null, cityname varchar(50) not null, temperature numeric (5,2) not null, description varchar(500) not null, created_on timestamp default now());