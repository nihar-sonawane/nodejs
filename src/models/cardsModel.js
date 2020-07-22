const mongoose = require("mongoose");
const shortid = require("shortid");

const cardsModel = mongoose.Schema(
  {
    //   cardId: mongoose.Schema.Types.ObjectId,
    // card: mongoose.Schema.Types.ObjectId,
    description: { type: String, required: false },
    cardTitle: { type: String },
    checkList: [
      {
        checkListName: { type: String },
        statusVal: { type: Boolean },
      },
    ],
    cardCreatedDate: { type: Date },
    dueDate: { type: Date },
    taskID: {
      type: String,
      default: shortid.generate,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CardModel", cardsModel);
