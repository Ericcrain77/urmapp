import React, { Component } from 'react';
import '../../src/App.css';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import usaHigh from "@amcharts/amcharts5-geodata/json/usaHigh";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

var selectedStates = [
  "US-CA",
  "US-TX",
  "US-TN",
  "US-AL",
  "US-AK",
]

  class Map extends Component {
  
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
         geoJSON: usaHigh,
         fill: am5.color(0x5bc8af),
         stroke: am5.color(0x000000)
      })
    )

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true,
    });
    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0xff6b6b)
    });
    
    for (let i = 0; i < selectedStates.length; i++) {
    polygonSeries.mapPolygons.template.adapters.add
    ('fill', function(fill, target) {
      if (target.dataItem.get("id") === selectedStates[i]) {
        return am5.color(0xff6b6b)
      }
      else{
        return fill;
      }
    })
    };

    this.root = root;
  }

  componentWillUnmount() {
    if (this.root) {
      this.root.dispose();
    }
  }

  render() {
    return (
      <div id="mapdiv"></div>
    );
  }
}

export default Map;