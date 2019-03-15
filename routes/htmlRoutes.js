
const path = require('path');

module.exports = (app) => {

    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "../client/tables.html"));
      });
    
      app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, "../client/reserve.html"));
      });

}