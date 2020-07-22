const mongooes = require("mongoose");

const projectDragDropSchema = require("../../models/projectModel");
const cardsSchema = require("../../models/cardsModel");

exports.postCard = async (req, res) => {
  const newCard = req.body;
  const card = new cardsSchema(newCard);
  await card.save();
  console.log("NEwcard=>", card);
  const project = await projectDragDropSchema.findOne({
    _idProject: req.params._idProject,
  });
  const boards = project.boards.find((c) => c._id == req.params._id);

  await boards.cards.push(card);
  await project.save();
  res.status(201).json(card);
};

exports.deleteCard = async (req, res) => {
  const cardId = req.body._id;
  const card = await cardsSchema.findById(cardId);
  if (!card) {
    return res.status(404).json({ error: "card does not exist" });
  }
  const project = await projectDragDropSchema.findOne({
    _idProject: req.params._idProject,
  });
  const boards = project.boards.find((c) => c._id == req.params._id);

  await card.remove();

  await boards.cards.pull(card);
  await project.save();
  res.status(200).json({ succes: true, message: "Card Removed" });
};

exports.updateCard = async (req, res) => {
  const cardsId = req.params._id;
  const newCard = req.body;
  console.log("carsid body=>", cardsId, newCard);

  const result = await cardsSchema.findByIdAndUpdate(cardsId, newCard);
  res.status(200).json({ succes: true, message: result });
};

exports.replaceCard = async (req, res) => {
  const cardsId = req.params._id;
  const newCard = req.body;
  console.log("carsid body=>", cardsId, newCard);

  const result = await cardsSchema.findByIdAndUpdate(cardsId, newCard);
  res.status(200).json({ succes: true, message: result });
};

exports.getSingleCard = async (req, res) => {
  // const cardsId = req.params._id;
  const card = await cardsSchema.findById(req.params._id);
  res.status(200).json(card);
};

exports.postCheckList = async (req, res) => {
  const cardsId = req.params._id;
  const card = await cardsSchema.update(
    { _id: cardsId },
    {
      $push: {
        checkList: {
          checkListName: req.body.checkListName,
          statusVal: req.body.statusVal,
        },
      },
    }
  );
  res.status(200).json(card);
};

exports.deletetCheckListItem = async (req, res) => {
  const cardId = req.query.cardID;
  const id = req.query.checkListID;
  const card = await cardsSchema.updateOne(
    { _id: cardId },
    { $pull: { checkList: { _id: id } } }
  );
  // console.log("card=>", card);
  res.status(200).json(card);
};

exports.replaceCheckListItem = async (req, res) => {
  const cardId = req.params._id;
  const newCard = req.body;
  console.log("carId body Checklist=>", cardId, newCard);

  // const result = await cardsSchema.findByIdAndUpdate(cardsId, newCard);
  // res.status(200).json({ succes: true, message: result });
  cardsSchema.update({});
};
// update({ "boards._id": _id }, { $set: { "boards.$.boardTitle": boardTitle } });
