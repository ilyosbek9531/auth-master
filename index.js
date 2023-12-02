const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
require("dotenv").config();
require("./helpers/init_mongodb");
const { verifyAccessToken } = require("./helpers/jwt_helper");

console.log("1");
const AuthRoute = require("./Routes/Auth.route");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("2");

// CORS middleware
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

console.log("3");

app.get("/books", (req, res) => {
  res.json("this is books");
});

app.get("/", verifyAccessToken, async (req, res, next) => {
  res.json("Hello from express.");
});

console.log("4");

app.use("/auth", AuthRoute);

console.log("5");

app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

console.log("6");

// secure password  is    D7y7e48gbjIpMiA8
// username is iqboljonsheraliyev11
