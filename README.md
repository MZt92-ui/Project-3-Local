# Project: Brazil Weather Web 
**An online app mainly designed with a dashboard for audience to access weather records of year 2020 for 24 stations in the Northern Brazil. 
<br/>The final work is accessible in [Final Work](https://monashbootcamp-project2.herokuapp.com)**

This project is created for Monash Data Analytics Bootcamp study, with the aim of applying different programming languages and tools such as Javascript & HTML for creating web visualisations. The main criteria for choosing a topic are worthy of analysis & resources available. 
<br/>And this is a replicate of the group work. For the purpose of practising the whole process, I recreated the work with some minor changes. 

## Original Dataset
The original data is from [Kaggle](https://www.kaggle.com/datasets/PROPPG-PPG/hourly-weather-surface-brazil-southeast-region).
<br/>It covers hourly data from 623 INMET weather stations of Brazil. The Weather information includes precipitation, temperature, air pressure, wind speed and etc.

## Project Procedures
**1. Set up Heroku & Github & Project Environment**

**2. ETL Process**
<br/>This mainly includes:
* Design the database schemas to store relevant information. 
<br/>In this project, it is designed in 2NF with STATION table to store basic information of stations, while NORTH table to store records at stations.
<p align="center">
    <img width="500" src="https://github.com/MZt92-ui/Project-3-Local/blob/main/ETL/database/erd_diagram.JPG">
</p>

* Transform data and perform initial analysis
<br/>In addition to handle wrong records, manipulate columns, another important part for this project is to reasonably narrow down the scope of projects due to limitation of Heroku Hoby Dev. In the final work, we selected the time scale of 1 year, but only at 12pm for each day for 24 stations (but not all stations are with full records, i.e. 365 days). 

**3. Create Flask App to Serve Data From Database**

**4. Develop Web Pages**
<br/>3 pages are designed for this website. Javascript libraries including Leaflet, Plotly and D3 were used to create the visualisations.
<p align="center">
    <img width="450" src="https://github.com/MZt92-ui/Project-3-Local/blob/main/other/web%20structure.JPG">
</p>

**5. Deployment In Heroku**



