const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// helpers
const { getSpeechResponse } = require("./helpers");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ status: "working!" });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.json(getSpeechResponse("Yo yo yo"));
});

app.listen(3000, () => {
  console.log("App: Test - listening on port 3000!");
});
