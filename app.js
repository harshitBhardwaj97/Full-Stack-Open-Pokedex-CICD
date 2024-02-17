const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

app.get("/version", (req, res) => {
  res.send("4"); // App should show 3 only, since this time deployment will fail
});

app.get("/health", (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw "error...  ";
  res.send("ok");
});
