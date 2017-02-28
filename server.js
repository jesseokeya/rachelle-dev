const express = require("express");
const gzippo = require('gzippo');
const port = process.env.PORT || 5000;
const app = express();

app.use(gzippo.staticGzip("" + __dirname + "/app"));

app.listen(port, function(){
  console.log("server listening on port " + port);
});
