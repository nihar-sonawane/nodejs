const express = require("express");
const router = express.Router();
const mongooes = require("mongoose");

const projectBoardsCards = require("../controller/projectBoardsCardsController");

router.post(
  "/createProjectBoardCard/:_idProject/:_id",
  projectBoardsCards.postProjectBoardCard
);

router.delete(
  "/deleteProjectColumnCard/:_idProject/:_id",
  projectBoardsCards.deleteProjectColumnCard
);

router.patch(
  "/updateProjectBoardCardName",
  projectBoardsCards.updateCardName
);

module.exports = router;
