const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts.js");
const express = require("express");

require("dotenv").config();

//express app
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, "    amouna   ", req.method);
  next();
});

//routes

app.use("/api/workouts", workoutRoutes);
//listen request

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "connected to db and server listeing on port" + process.env.PORT
      );
    });
  })
  .catch((error) => console.log(error));
