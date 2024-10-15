var vg_1 = "map.vg.json";
var vg_2 = "line_chart.vg.json";
var vg_3 = "bar_chart.vg.json";
var vg_4 = "pie_chart.vg.json";



function updateYear(year) {
    selectedYear = year;
    document.getElementById("yearLabel").textContent = year; // Update label
    vegaEmbed('#map', vg_1).then(function(result) {
        result.view.signal('selectedYear', selectedYear).run();

        result.view.signal('selectedSector', selectedSector).run();
        }).catch(console.error);

    vegaEmbed('#bar_chart', vg_3).then(function(result) {
        result.view.signal('selectedYear', selectedYear).run();
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
        }).catch(console.error);
    
    vegaEmbed('#bar_chart', vg_3).then(function(result) {
        result.view.signal('selectedYear', selectedYear).run();
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
        }).catch(console.error);
    
    vegaEmbed('#pie_chart', vg_4).then(function(result) {
        result.view.signal('selectedYear', selectedYear).run();
        result.view.signal('selectedState', selectedState).run();
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
        }).catch(console.error);

  }

vegaEmbed('#map', vg_1).then(function(result) {

    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

vegaEmbed('#line_chart', vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

vegaEmbed('#bar_chart', vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

vegaEmbed('#pie_chart', vg_4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

