const express = require("express");
const router = express.Router();
const mongooes = require("mongoose");

const projects = require("../controller/projectsController");

//for new project
router.post("/createProject", projects.postProject);

router.get("/getAllProjects", projects.getProject);

router.patch("/updateProjectName/:_idProject", projects.updateProjectName);

router.delete("/deleteProjectBoard/:_idProject", projects.deleteProjectBoard);

router.put("/editProject/:_idProject", projects.editProject);

module.exports = router;
