import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";

var root = am5.Root.new("chartdiv");
var chart = root.container.children.push(
  am5map.MapChart.new(root, {
      projection: am5map.geoAlbersUsa()
  })
);

var polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_usaHigh
    })
  );
