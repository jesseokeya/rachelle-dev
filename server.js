const express = require("express");
const port = process.env.PORT || 5000
const app = express();

app.use('/', express.static('app'));

app.listen(port, function(){
  console.log("server listening on port " + port);
});
