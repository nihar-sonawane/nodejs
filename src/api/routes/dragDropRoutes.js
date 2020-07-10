const express = require("express");
const router = express.Router();
const mongooes = require("mongoose");

const board = require("../controller/dragDropController")

//from app.js

//for single section of board/column
router.post('/postBoard', board.postBoard)

router.delete('/:_idBoard', board.deleteBoard)

router.get('/', board.getBoard)

router.patch('/:_idBoard',board.updateBoard)


module.exports = router;