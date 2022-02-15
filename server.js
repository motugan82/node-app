const http = require("http");
const app = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plane");
  res.end("Server is running");
});

app.listen(3000, function () {
  console.log("Server is running");
});
