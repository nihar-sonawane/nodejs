const mongooes = require("mongoose");

const projectDragDropSchema = require("../../models/projectModel");

exports.postProject = (req, res) => {
  const project = new projectDragDropSchema({
    _idProject: new mongooes.Types.ObjectId(),
    projectTitle: req.body.projectTitle,
    // cards: [{}],
  });
  project
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "created project POST",
        createdProject: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
      console.log(err);
    });
};

exports.getProject = (req, res) => {
  projectDragDropSchema
    .find()
    // .select("name price _id")
    .exec()
    .then((projects) => {
      console.log("all projects=>", projects);
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
      res.status(200).json(projects);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.updateProjectName = (req, res) => {
  const id = req.params._idProject;
  projectDragDropSchema
    .update({ _idProject: id }, { projectTitle: req.body.projectTitle })
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


exports.deleteProjectBoard = (req, res, next) => {
    const id = req.params._idProject;
    projectDragDropSchema.remove({ _idProject: id })
      .exec()
      .then((result) => {
        res.status(200).json({
          message: "Project deleted",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  };
  