//*************************************
//Basic tile layer
//*************************************
var myMap = L.map("map", {
  center: [-7.20, -59.88],
  zoom: 5
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/satellite-streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

//*************************************
//Brazil States Boundary
//*************************************
var states_data_link = "../static/data/brazil_geo.json";

d3.json(states_data_link).then(function(data){
  console.log(data);
  L.geoJson(data,{
    fillOpacity: 0.05,
    weight: 3
  }).addTo(myMap);
});

//*************************************
// function to create a map with markers
//*************************************
function createMap(responce){
for (var i=0; i<responce.length; i++){
  console.log([responce[i].latitude, responce[i].longitude]);

  // variable for popup input
  var id = "Explore Station";
  var id_input = id.concat(" ",":"," ", responce[i].station_id);

  L.marker([responce[i].latitude, responce[i].longitude], {
    draggable: true
  }).bindPopup('<a href="/dashboard.html"> '+id_input+' </a>').addTo(myMap);
};
};

//*************************************
// read from flask API & call function 
//*************************************
const url = "/api/stations";
d3.json(url).then(createMap);
