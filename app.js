const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

app.get("/version", (_req, res) => {
  res.send("18"); // Ex 11.18 unsuccessful-deployment-branch test

  console.log(
    "This console log statement will fail the lintingm and hence resulting in unsuccessful deployment"
  );
});

app.get("/health", (_req, res) => {
  res.send("ok");
});
