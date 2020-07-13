const mongoose = require("mongoose");

const projectDragDropSchema = mongoose.Schema({
  _idProject: mongoose.Schema.Types.ObjectId,
  projectTitle: { type: String, required: true },
  boards: [
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
      required: false,
    },
  ],
});

module.exports = mongoose.model("ProjectDragDrop", projectDragDropSchema);
