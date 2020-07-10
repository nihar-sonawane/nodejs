const mongooes = require("mongoose");

const Project = require("../../models/dragDropModel");
const Board = require("../../models/dragDropModel");

exports.postProject = (req, res) => {
  const project = new Project({
    _idProject: new mongooes.Types.ObjectId(),
    // boardTitle: req.body.boardTitle,
    // cards: [{}],
  });
  project
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "handling POST req to Project",
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

exports.putProject = (res, req, next) => {
  console.log("rrreeqqq params", req);

  console.log("SSSSSSSSsstttttaaarrrttt");
  const board = {
    _idBoard: new mongooes.Types.ObjectId(),
    boardTitle: "newTest",
    // cards: [{}],
  };
  console.log("2222222");

  let id = req.params._idProject;
  // const id = "5f083cd13db70045461e92e9";
  Project.findOneAndUpdate({ _idProject: id }, { $push: { boards: board } })
    .exec()
    .then((result) => {
      console.log(result);
      //   res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      //   res.status(500).json({
      //     error: err,
      //   });
    });
};

exports.getProject = (req, res) => {
  const projectObject = Project.find(
    (c) => c._idProject == parseInt(req.params._idProject)
  );

  // .select("name price _id")

  // .exec()
  // .then((project) => {
  //   console.log("all project=>", project);
  //   res.status(200).json(project);
  // })
  // .catch((err) => {
  //   console.log(err);
  //   res.status(500).json({
  //     error: err,
  //   });
  // });
};
