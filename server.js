const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/https://ik.imagekit.io/v64tipjbn", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});