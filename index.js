var http = require("http");

http
  .createServer(function (res, req) {
    res.write("Hello from http module").res.end();
  })
  .listen("8080");
