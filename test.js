const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// helpers
const { sendSpeechResponse, getIntent } = require("./helpers");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ status: "working!" });
});

app.post("/", (req, res) => {
  const intent = getIntent(req.body.result);
  const [entity, action] = intent.split(".");
  res.json(
    sendSpeechResponse(`I will look up entity ${entity} with action ${action}`)
  );
});

app.listen(3000, () => {
  console.log("App: Test - listening on port 3000!");
});
