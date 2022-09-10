
//###########################################
// Function to create a map of stations with 
// markers 
//###########################################
function createMap(responce){
  
  // Basemap:
  var myMap = L.map("map", {
      center: [-28.01, 153.4],
      zoom: 13
    });
    
    var API_KEY = "pk.eyJ1Ijoic3RvbWlsZTgyOSIsImEiOiJjbDdyNzZqNzUwYzF2M25tdndlNmtiYmM4In0.Jz-cFjVPE0LuSQMxLA2E2A";

    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
      id: "mapbox/streets-v11",
      accessToken: API_KEY
    }).addTo(myMap);
};

createMap();
  