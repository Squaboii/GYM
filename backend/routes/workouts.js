const express = require("express");
const {
  createWorkout,
  getworkouts,
  getworkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");
const router = express.Router();

//get all workouts
router.get("/", getworkouts);

//get a single workout
router.get("/:id", getworkout);

// POST A NEW WORK OUT
router.post("/", createWorkout);

//DELET A WORK OUT

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

module.exports = router;
