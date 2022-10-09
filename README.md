#Brazil Weather Web 
An online app mainly designed with a dashboard for audience to access weather records of 24 stations in the Northern Brazil in year 2020. 
The final work is accesible in https://monashbootcamp-project2.herokuapp.com/index.html

##Motivation of this project
This project is for Monash Bootcamp, with aim of practicing using different languages and tools such as Javascript & HTML, for creating web visulisations for real-life data analysis. The main criteria for choosing a topic are worthy of analysis & handy resources. 
And this is a replicate of the group work (in https://project-3-group-8.herokuapp.com/index.html). For the purpose of practising the whole process, I recreated the work with some minor changes. 

##About Original Data
The main source of original data is from Kaggle (https://www.kaggle.com/datasets/PROPPG-PPG/hourly-weather-surface-bcrazil-southeast-region).
It covers hourly weather data from 623 INMET weather stations of Brazil. Weather information includes precipitation, temperature, air pressure, wind speed and etc.

##Procedure of the work:
1. Set up Heroku & Github & Project Environment

2. ETL Process:
major folder:
This mainly includes:
* Design the database schemas to store relevant information
in this project it is designed in 2NF with STATION table to store basic information of stations, while NORTH table to store records at stations

* Transform data and perform initial analysis of data:
In addition to handle wrong records, manipulate columns, another important part for this project is to reasonbly narrow down the schope of projects due to limitation of Heroku Hoby Dev. In this project, we are interested the time scale of 1 year, but only at 12pm for each day for 24 stations. And not all stations are with full records.

3. Create Flask app & Serve Data

4. Develop Web pages
3 pages are designed for this website: index page as a brief introduction

4. Deployment



