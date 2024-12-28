import express from "express";

const app = express();

const PORT = 3000;

const a = "a";

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
