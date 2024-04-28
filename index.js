import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 5000;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));

// ROUTES
app.get("/", (req, res) => {
  res
    .status(200)
    .send({ message: "Welcome to the Node and jenkins Application...." });
});

app.get("/status", (req, res) => {
  res.status(201).send({ message: "API is working fine!!!" });
});

app.use("*", (req, res) => {
  res.status(404).send({
    message: "No route exists with the specified path",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
