const mongoose = require("mongoose");

const cardsModel = mongoose.Schema({
  //   cardId: mongoose.Schema.Types.ObjectId,
  card: mongoose.Schema.Types.ObjectId,
  description: { type: String, required: false },
});

module.exports = mongoose.model("CardModel", cardsModel);
