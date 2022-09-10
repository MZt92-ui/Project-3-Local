


###########################################
# Render the corresponding html
###########################################
from turtle import title
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/stations")
def station():
    return render_template("stations.html")

if __name__ == "__main__":
    app.run(debug=False)

###########################################
# Flask to create API call from database 
# for Station table
###########################################