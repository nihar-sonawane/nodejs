// const mongooes = require("mongoose");

// const projectDragDropSchema = require("../../models/projectModel");

// exports.postProjectBoardCard = (req, res) => {
//   const id = req.params._idProject;
//   const boardID = req.params._id;
//   //   console.log("iidddsss", id, boardID, req.body.cardTitle);
//   projectDragDropSchema
//     .update(
//       { _idProject: id, "boards._id": boardID },
//       //   { $push: { boards: { boardTitle: req.body.boardTitle } } }/
//       //   { boards: { _id: boardID, $push: { cardTitle: req.body.cardTitle } } }
//       { $push: { "boards.$.cards": { cardTitle: req.body.cardTitle } } }
//     )
//     .exec()
//     .then((result) => {
//       console.log(result);
//       res.status(200).json(result);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         error: err,
//       });
//     });
// };

// exports.deleteProjectColumnCard = (req, res, next) => {
//   const idProject = req.params._idProject;
//   const boardID = req.params._id;
//   projectDragDropSchema
//     .updateOne(
//       { _idProject: idProject, "boards._id": boardID },
//       { $pull: { "boards.$.cards": { _id: req.body._id } } }
//     )
//     .exec()
//     .then((result) => {
//       res.status(200).json({
//         message: "Project Column Card deleted",
//       });
//       console.log("result=>", result);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         error: err,
//       });
//     });
// };

// exports.updateCardName = (req, res) => {
//   const idProject = req.query._idProject;
//   const boardID = req.query._idBoard;
//   const cardID = req.query._idCard;
//   const cardTitle = req.body.cardTitle;

//   // const idProject = ObjectId("5f0ffa253b7aec08c5c73d90");
//   // const boardID = ObjectId("5f104630659a375742ac069f");
//   // const cardID = ObjectId("5f104639659a375742ac06a3");
//   // const cardTitle = "qweqweqweqweweqweqwe";

//   console.log("iD===>>>", idProject, boardID, cardID, cardTitle);

//   projectDragDropSchema
//     .update(
//       {
//         _idProject: idProject,
//         "boards._id": boardID,
//         "boards.cards._id": cardID,
//       },
//       {},
//       {
//         $set: {
//           "boards.$.cards": {
//             cardTitle: cardTitle,
//           },
//         },
//       },
//       // { new: true }
//     )
//     .exec()
//     .then((result) => {
//       console.log("RESUTL", result);
//       res.status(200).json(result);
//     })
//     .catch((err) => {
//       console.log(err, "Errorrrr");
//       res.status(500).json({
//         error: err,
//       });
//     });

//   // console.log("ennnddddd===>>>", idProject, boardID, cardID, cardTitle);
// };
