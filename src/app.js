const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/dbconnect");

const productRoutes = require("./api/routes/productsRoutes");
// const orderRoutes = require("./api/routes/orders");
const dragDropRoutes = require("./api/routes/dragDropRoutes");
const projectBoardRoutes = require("./api/routes/projectBoardRoutes");

const projectRoutes = require("./api/routes/projectRoutes");
const projectBoardCardsRoutes = require("./api/routes/projectBoardCardsRoutes");

connectDB();

app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

//cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept,Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});

//routes
app.use("/products", productRoutes);
app.use("/table", dragDropRoutes);
// app.use("/order", orderRoutes);

//working (used in main project)
app.use("/Project", projectRoutes);

//for project Board
app.use("/projectBoard", projectBoardRoutes);

//for project board cards
app.use("/projectBoardCards", projectBoardCardsRoutes);

app.use((req, res, next) => {
  const error = new Error("not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: "this is the error: " + error.message,
    },
  });
});

module.exports = app;
