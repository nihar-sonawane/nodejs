const express = require("express");
const router = express.Router();
const mongooes = require("mongoose");

const projectBoardsCards = require("../controller/projectBoardsCardsController");

// for cards (do not refer these)
const projectCards = require("../controller/cardsController");

// router.post(
//   "/createProjectBoardCard/:_idProject/:_id",
//   projectBoardsCards.postProjectBoardCard
// );

// router.delete(
//   "/deleteProjectColumnCard/:_idProject/:_id",
//   projectBoardsCards.deleteProjectColumnCard
// );

// router.patch("/updateProjectBoardCardName", projectBoardsCards.updateCardName);

// new code for cards
router.post("/createCard/:_idProject/:_id", projectCards.postCard);

router.delete("/deleteCard/:_idProject/:_id", projectCards.deleteCard);

//patch beacause: user can send combination of any fields to be edited
router.patch("/updateCard/:_id", projectCards.updateCard);

router.put("/putCard/:_id",projectCards.replaceCard)

router.get("/getSingleCard/:_id",projectCards.getSingleCard)

//for checklist
router.post("/postCheckList/:_id", projectCards.postCheckList)

router.delete("/deletetCheckListItem", projectCards.deletetCheckListItem);

router.put("/putCheckListItem/:_id",projectCards.replaceCheckListItem)

module.exports = router;
