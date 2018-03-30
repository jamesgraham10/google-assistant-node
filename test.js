function getSpeechResponse(speechResponse) {
  return {
    speech: speechResponse
  };
}

const app = require("express")();

app.get("/", (req, res) => {
  res.json({ status: "working!" });
});

app.post("/", (req, res) => {
  res.json(getSpeechResponse("Yo yo yo"));
});

app.listen(3000, () => {
  console.log("App: Test - listening on port 3000!");
});
