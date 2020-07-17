const express = require("express");
const router = express.Router();
const mongooes = require("mongoose");

const projectBoards = require("../controller/projectBoardController");

//to add boards in new project
router.post("/createProjectBoard/:_idProject", projectBoards.postProjectBoard);

router.get("/getAllProjectBoard/:_id", projectBoards.getProjectBoard);

router.delete(
  "/deleteProjectColumn/:_idProject/:_id",
  projectBoards.deleteProjectColumn
);

router.patch(
  "/updateProjectColumn/:_id/:boardTitle",
  projectBoards.updateProjectColumnName
);



module.exports = router;
