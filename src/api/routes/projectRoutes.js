const express = require("express");
const router = express.Router();
const mongooes = require("mongoose");

const projectBoard = require("../controller/projectsController");

//to create a new project
router.post("/createProject", projectBoard.postProject);

router.get("/getAllProjects", projectBoard.getProject);

router.patch("/updateProjectName/:_idProject", projectBoard.updateProjectName);

router.delete(
  "/deleteProjectBoard/:_idProject",
  projectBoard.deleteProjectBoard
);

module.exports = router;
