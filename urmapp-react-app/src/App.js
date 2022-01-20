
import React, { Component } from 'react';
import './App.css';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import usaHigh from "@amcharts/amcharts5-geodata/json/usaHigh";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

class App extends Component {
  componentDidMount() {

    var root = am5.Root.new("mapdiv");
    
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    var chart = root.container.children.push(
        am5map.MapChart.new(root, {
          projection: am5map.geoAlbersUsa()
        })
        );
    
      
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
         geoJSON: usaHigh   
      })
    );
    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true
    });
    
    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x677935)
    });
    
    polygonSeries.data.push({
      geometry: am5map.geoAlbersUsa(),
      
    });
    
    this.root = root;
  }

  componentWillUnmount() {
    if (this.root) {
      this.root.dispose();
    }
  }

  render() {
    return (
      <div id="mapdiv" style={{ width: "100%", height: "500px" }}></div>
    );
  }
}

export default App;