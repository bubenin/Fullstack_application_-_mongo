const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createNewTask,
  changeTaskInfo,
  deleteTask,
} = require("../controllers/task.controller");

//Tasks router
router.get("/allTasks", getAllTasks);
router.post("/createTask", createNewTask);
router.patch("/updateTask", changeTaskInfo);
router.delete("/deleteTask", deleteTask);

//User

module.exports = router;
