$wt.map.render('world-map',{
  map: {
    background: ["positron"],
    height: 300
  },
  layers: {
    countries: [{
      data: ["EU28"],
      options: {
        color: "#f93",
        events: {
          "click" : "https://www.google.ro",
          "tooltip" : "<b>{CNTR_NAME}</b>"
        }
      }
    }]
  }
});
