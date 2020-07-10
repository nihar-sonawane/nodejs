const express = require("express");
const router = express.Router();
const mongooes = require("mongoose");

const project = require("../controller/projectController");

//from app.js

//for single section of board/column
router.post("/postProject", project.postProject);

// router.get("/:_idProject", project.getProject);

// putProject
router.put("/test/:_idProject", project.putProject);

module.exports = router;
