import React, { useLayoutEffect } from "react";
import Auth from "../utils/auth";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import usaHigh from "@amcharts/amcharts5-geodata/json/usaHigh";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { ADD_STATE } from "../utils/mutations";
import { GET_ME } from "../utils/queries";

// var selectedStates = ["US-TN"];

function Map(userData) {
  const loggedIn = Auth.loggedIn();

  const [addState, { error }] = useMutation(ADD_STATE);

  const selectedStates = userData.userData.me.states;
  console.log(userData.userData.me.states);

  useLayoutEffect(() => {
    let root = am5.Root.new("mapdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    var chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoAlbersUsa(),
      })
    );

    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: usaHigh,
        fill: am5.color(0x5bc8af),
        stroke: am5.color(0x000000),
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true,
    });
    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0xff6b6b),
    });

    var polygonTemplate = polygonSeries.mapPolygons.template;

    polygonTemplate.events.on(
      "click",
      (ev) => {
        try {
          const { data } = addState({
            variables: { state: ev.target.dataItem.dataContext.id },
          });
          window.location.reload();
        } catch (e) {
          console.error(e);
        }
      },
      this
    );

    for (let i = 0; i < selectedStates.length; i++) {
      polygonSeries.mapPolygons.template.adapters.add(
        "fill",
        function (fill, target) {
          if (target.dataItem.get("id") === selectedStates[i].state) {
            return am5.color(0xff6b6b);
          } else {
            return fill;
          }
        }
      );
    }

    root.current = root;

    return () => {
      root.dispose();
    };
  }, []);


  return (
    <div id="mapdiv" style={{ width: "100%", height: "500px" }}>
      {/* <button onClick={findme}></button> */}
    </div>
  );
}

export default Map;
