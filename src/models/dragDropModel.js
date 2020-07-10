const mongoose = require("mongoose");

const boardSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  // name: { type: String, required: true },
  // price: { type: Number, required: true },

  _idBoard: mongoose.Schema.Types.ObjectId,
  boardTitle: { type: String, required: true },
  cards: [
    {
      type: new mongoose.Schema(
        {
          cardId: { type: mongoose.Schema.Types.ObjectId, required: true },
          cardTitle: { type: String, required: false },
        }
        // { minimize: false }
      ),
      required: false,
    },
  ],
});

module.exports = mongoose.model("Board", boardSchema);

//Main Project Board
const projectScheme = mongoose.Schema({
  _idProject: mongoose.Schema.Types.ObjectId,
  boards: [
    // {
    //   type: boardSchema,
    //   ref: "Board",
    // },
    {
      _idBoard: mongoose.Schema.Types.ObjectId,
      boardTitle: { type: String, required: false },
      cards: [
        {
          type: new mongoose.Schema(
            {
              cardId: { type: mongoose.Schema.Types.ObjectId, required: true },
              cardTitle: { type: String, required: false },
            }
            // { minimize: false }
          ),
          required: false,
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Project", projectScheme);
