const mongooes = require("mongoose");

const projectDragDropSchema = require("../../models/projectModel");

exports.postProjectBoard = (req, res) => {
  const id = req.params._idProject;
  projectDragDropSchema
    .update(
      { _idProject: id },
      { $push: { boards: { boardTitle: req.body.boardTitle } } }
    )
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

exports.getProjectBoard = (req, res) => {
  const id = req.params._id;
  projectDragDropSchema
    .findById(id)
    .populate("boards.cards")
    .exec()
    .then((projectBoards) => {
      console.log("all boards of a projects=>", projectBoards);
      res.status(200).json(projectBoards);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.deleteProjectColumn = (req, res, next) => {
  const idProject = req.params._idProject;
  const id = req.params._id;
  projectDragDropSchema
    .updateOne({ _idProject: idProject }, { $pull: { boards: { _id: id } } })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Project Column deleted",
      });
      console.log("result=>", result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.updateProjectColumnName = (req, res) => {
  // const _idProject = req.params._idProject;
  const _id = req.params._id;
  boardTitle = req.params.boardTitle;
  // console.log("boardtitle",boardTitle);
  
  projectDragDropSchema
    .update(
      // { _idProject: _idProject },
      // // { $set: { boards: { _id: id, boardTitle: req.body.params } } }
      // { boards: { _id: _id } },
      // { boardTitle: req.body.params }
      { "boards._id": _id },
      { $set: { "boards.$.boardTitle": boardTitle} }
    )
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
