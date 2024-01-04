const Workout = require("../models/workoutModel.js");
const mongoose = require("mongoose");
// get all workout
const getworkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// get a sinlge workout
const getworkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json("no such workout");
  }
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "no such work out " });
  } else {
    return res.status(202).json(workout);
  }
};

// create a new workout

const createWorkout = async (req, res) => {
  const { load, reps, title } = req.body;

  try {
    const workout = await Workout.create({ load, reps, title });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout

const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such workout" });
  }
  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(400).json({ error: "no such workout" });
  }
  res.status(200).json(workout);
};

//Update a work out

const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(200).json({ error: "no such workout" });
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!workout) {
    return res.status(400).json({ error: "no such workou" });
  }

  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getworkouts,
  getworkout,
  deleteWorkout,
  updateWorkout,
};
