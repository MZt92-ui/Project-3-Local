# Brazil Weather Web 
**An online app mainly designed with a dashboard for audience to access weather records of 24 stations in the Northern Brazil in year 2020. 
The final work is accesible in [Final Work](https://monashbootcamp-project2.herokuapp.com)**

## Motivation of this project
This project is created for Monash Data Analytics Bootcamp, with the aim of practicing applying different languages and tools such as Javascript & HTML for creating web visulisations. The main criteria for choosing a topic are worthy of analysis & resources available. 
<br/>And this is a replicate of the group work ([link] (https://project-3-group-8.herokuapp.com/index.html)). For the purpose of practising the whole process, I recreated the work with some minor changes. 

## About Original Data
The original data is from [Kaggle](https://www.kaggle.com/datasets/PROPPG-PPG/hourly-weather-surface-bcrazil-southeast-region).
<br/>It covers hourly data from 623 INMET weather stations of Brazil. The Weather information includes precipitation, temperature, air pressure, wind speed and etc.

## Project Procesures
**1. Set up Heroku & Github & Project Environment**

**2. ETL Process**
This mainly includes:
* Design the database schemas to store relevant information. 
<br/>In this project, it is designed in 2NF with STATION table to store basic information of stations, while NORTH table to store records at stations.
<br/>![Database Schema](https://github.com/MZt92-ui/Project-3-Local/blob/main/ETL/database/erd_diagram.JPG)

* Transform data and perform initial analysis
<br/>In addition to handle wrong records, manipulate columns, another important part for this project is to reasonably narrow down the schope of projects due to limitation of Heroku Hoby Dev. In this project, we are interested the time scale of 1 year, but only at 12pm for each day for 24 stations. And not all stations are with full records.

**3. Create Flask App to Serve Data**

**4. Develop Web Pages**
3 pages are designed for this website:
<br/>

**5. Deployment**



