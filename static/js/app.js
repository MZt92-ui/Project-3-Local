// console.log("OK, CAN BE CONNECTED")

const station_url = "/api/stations";
const north_url = "/api/north"

// Input Dropdown into html
d3.json(station_url).then((data) => {
  var dropdown = d3.select("#selDataset");
  var data_length = data.length;
  for (var i=0; i<data_length; i++){
    dropdown.append("option").text(data[i].station_id)
  };
});

// Function to initialise developing a report
function report(){
  d3.json(station_url).then((station_data) => {
    
    var station_id_li = station_data.map(function(i){return i.station_id});
    var station_name_li = station_data.map(function(i){return i.station_name});
    var state_li = station_data.map(function(i){return i.state});

    var chosen_station = d3.select('#selDataset').property("value");
    var chosen_index = station_id_li.indexOf(chosen_station);
    d3.select("#sample-metadata").html("")
              .append("ul")
              .append("li").text(`Station ID: ${chosen_station}`)
              .append("li").text(`Station Name: ${station_name_li[chosen_index]}`)
              .append("li").text(`State Abbr: ${state_li[chosen_index]}`);
  });
};

// Function to initialise developing a gauge
function gauge(){
  d3.json(north_url).then((data) => {
    // define the data as the average wind speed
    var chosen_station = d3.select('#selDataset').property("value");
    var station_id_li_gauge = data.map(function(i){return i.station_id});
    var speed_li = data.map(function(i){return i.wind_speed});
    var chosen_station_sum = 0;
    var chosen_station_no = 0;
    var length = station_id_li_gauge.length;
    for(var i=0; i<length; i++){
      if(station_id_li_gauge[i]== chosen_station){
        chosen_station_no = chosen_station_no + 1;
        chosen_station_sum = chosen_station_sum + parseFloat(speed_li[i]) * 1.94384;
      }
    };
    var avgspeed = Math.round( 1000 * chosen_station_sum / chosen_station_no)/1000;

    var gaugetrace = [{
      type: "indicator",
      mode: "gauge+number",
      value: avgspeed,
      title: { 'text': "Average Wind Speed (knots)",font:{family:'Arial',size:20}},
      gauge: {
        axis: {
          range: [null, 30],
          tickangle:0,
          tickvals:[0,1,3,6,10,16,21,30],
          tickmode:"array",
          tickfont: { size: 12 },
          ticktext:["Calm-0","1","3","6","10","16","21","30-Strong"],
          ticklen:0
        },
        bar: { color: "lightgreen" },
        steps: [
          { range: [null, 1], color: "#99FFBB"},
          { range: [1, 3], color: "#00CCFF" },
          { range: [3, 6], color: "#00A3FF" },
          { range: [6, 10], color: "#007AFF" },
          { range: [10, 16], color: "#0052FF" },
          { range: [16, 21], color: "#0000FF" },
          { range: [21, 30], color: "#0700C4" }
        ],
        threshold:{line:{color:"red", width:4},thickness:1, value:22}
      }
    }];
    var layout = {width: 600, height: 400};
    
    Plotly.newPlot("gauge", gaugetrace, layout);
  }
  )};

// Function to initialise developing a line charts
function line(){
  d3.json(north_url).then((data) => {
    var chosen_station = d3.select('#selDataset').property("value");

    // get the month data & its average precipitation data 
    var month_li = []; 
    var pre_li = [];
    var data_lenth_line = data.length;
    for(var i=0; i<data_lenth_line; i++){
      if (data[i].station_id == chosen_station){
        month_li.push(data[i].month);
        pre_li.push(parseFloat(data[i].total_precipitation));
      };
    };

    var month_precipitation = {};
    var month_no = {};
    var month_length = month_li.length;
    for (var i=0; i<month_length; i++){
      if (month_li[i] in month_precipitation){
        month_no[month_li[i]] += 1;
        month_precipitation[month_li[i]] += pre_li[i];
      }
      else {
        month_no[month_li[i]] = 0;
        month_precipitation[month_li[i]] = 0;}
    };
    
    console.log(month_no, month_precipitation);
    var data = [];
    var chosen_length = Object.values(month_no).length
    for (var i = 0; i < chosen_length; i++) {
      data.push(Object.values(month_precipitation)[i] / Object.values(month_no)[i]);
    }
    // format the line plot
    var linetrace = {
      domain:{"x":[0,1],"y":[0,1]},
      x: Object.keys(month_precipitation),
      y: data,
      mode: "lines+markers",
      marker:{color:"#0052FF", size:10}
    };
    var draw_data = [linetrace];
    var layout={
      title: {text:"Average Precipitation at 12pm", font:{family:'Arial',size:20}},
      xaxis:{title:"Month",range:[1,12],dtick:1},
      yaxis:{title:"Precipitation (mm) within last hour",range:[0,2.4], dtick:0.2}
          }
    Plotly.newPlot("lineplot", draw_data, layout)
  })
};


// Initializes the page with a default
function init(){
  report();
  gauge();
  line();
};

// Create a listener
d3.selectAll("#selDataset").on("change",init);

init()
