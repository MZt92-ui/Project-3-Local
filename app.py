from flask import Flask, render_template, jsonify
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################
postgres_url = 'postgresql://mtfetravyddqqn:a89ccc05f5799f3bc56acb93d1658731d6a0b7f90c8de7fc6f11aa8fc93558aa@ec2-3-229-165-146.compute-1.amazonaws.com:5432/d3ila8010gb78r'
engine = create_engine(postgres_url)
Base = automap_base()
Base.prepare(engine, reflect=True)

# keys = Base.classes.keys
weather_table = Base.classes.north_weather
station_table = Base.classes.north_station


#################################################
# Flask Routes
#################################################

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/index.html")
def returnhome():
    return render_template("index.html")

@app.route("/map.html")
def map():
    return render_template("map.html")

@app.route("/dashboard.html")
def dashboard():
    return render_template("dashboard.html")


#################################################
# Flask API
#################################################

@app.route("/api/stations")
def merged():
    session = Session(engine)
    results = session.query(station_table.station_id,
        station_table.station_name,
        station_table.state,
        station_table.longitude, 
        station_table.latitude).all()
    session.close()

    station_data = []
    for id, stationname, state, longitude, latitude in results:
        station_dict = {}
        station_dict["station_id"] = id
        station_dict["station_name"] = stationname
        station_dict["state"] = state
        station_dict["longitude"] = longitude
        station_dict["latitude"] = latitude
        station_data.append(station_dict)
    return jsonify(station_data)

@app.route("/api/north")
def north():
    session = Session(engine)
    results = session.query(weather_table.station_id,
            weather_table.total_precipitation,
            weather_table.wind_speed,
            weather_table.month
            ).all()
    session.close()

    north_data = []
    for station_id, total_precipitation, wind_speed, month in results:
        north_dict = {}
        north_dict['station_id'] = station_id
        north_dict['total_precipitation'] = total_precipitation
        north_dict['wind_speed'] = wind_speed
        north_dict['month'] = month
        north_data.append(north_dict)

    return jsonify(north_data)

if __name__ == "__main__":
    app.run(debug=False)
