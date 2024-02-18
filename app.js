const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

app.get("/version", (_req, res) => {
  res.send("7"); // Exercise 11.14
});

app.get("/health", (_req, res) => {
  res.send("ok");
});
