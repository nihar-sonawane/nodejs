const mongooes = require("mongoose");

const Board = require("../../models/dragDropModel");

exports.getBoard = (req, res) => {
  Board.find()
    // .select("name price _id")
    .exec()
    .then((boards) => {
      console.log("all doc=>", boards);
      // const response = {
      //   count: docs.length,
      //   board: docs.map((board) => {
      //     return {
      //       board,
      //       // request: {
      //       //   type: "GET",
      //       //   url: "http://localhost",
      //       // },
      //     };
      //   }),
      // };
      res.status(200).json(boards);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.postBoard = (req, res) => {
  const board = new Board({
    _idBoard: new mongooes.Types.ObjectId(),
    boardTitle: req.body.boardTitle,
    // cards: [{}],
  });
  board
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "handling POST req to /products",
        createdProduct: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
      console.log(err);
    });
};

exports.deleteBoard = (req, res, next) => {
  const id = req.params._idBoard;
  Board.remove({ _idBoard: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "column deleted",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.updateBoard = (req, res) => {
  const id = req.params._idBoard;
  // const updateOps = {};
  // for (const ops of req.body) {
  //   updateOps[ops.propName] = ops.value;
  // }
  Board.update({ _idBoard: id }, { boardTitle: req.body.boardTitle })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
