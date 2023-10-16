import { Schema, model, models } from "mongoose";


const userSchema = new Schema({
 
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: function () {
      return Date.now();
    },
  },
});

const User = models.User || model("User", userSchema);

export default User;
