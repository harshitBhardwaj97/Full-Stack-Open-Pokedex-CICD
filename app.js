const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

app.get("/version", (_req, res) => {
  res.send("13"); // Exercise 11.16, not adding #skip in commit message, hence version should be shown as 13 after merge request and deployment.
});

app.get("/health", (_req, res) => {
  res.send("ok");
});
