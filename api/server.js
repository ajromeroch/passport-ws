const express = require("express");
const helmet = require("helmet");
const http = require("http");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const config = require("./server.config.js");

app.use(helmet());

// Express Route File Requires
const authAPI = require("./routes");

app.use(express.static(path.resolve(__dirname, "src/public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express Routing
app.use("/api", authAPI);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/public", "index.html"));
});

http.createServer(app).listen(config.port);
