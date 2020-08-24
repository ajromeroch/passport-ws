const express = require("express");
const helmet = require("helmet");
const http = require("http");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const appConfig = require("./app.config.js");

app.use(helmet());

// Express Route File Requires
const authAPI = require("./api/routes.js");

// <REQUIRES> DON'T CHANGE THIS LINE - Express route file requires will be added above here.

app.use(express.static(path.resolve(__dirname, "src/public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express Routing
app.use("/api", authAPI);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/public", "index.html"));
});

http.createServer(app).listen(appConfig.port);

