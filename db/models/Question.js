import { Schema, model, models } from "mongoose";

const questionSchema = new Schema({
  movingFrom: { type: String },
  movingTo: { type: String },
  name: { type: String },

  email: { type: String },
  telephone: { type: String },
  isOurServiceUsed: { type: Boolean },
  recomended: { type: String },
  recomendedName: { type: String },
  bestTimeForContact: { type: String },
  addressDetails: { type: String },

  createdAt: {
    type: String,
    default: () => {
      return new Date(Date.now()).toLocaleDateString();
    },
  },
});

const Question = models.Question || model("Question", questionSchema);

export default Question;
