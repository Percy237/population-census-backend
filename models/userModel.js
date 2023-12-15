import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    numChildrenUnder21: {
      type: Number,
    },
    numChildrenAbove21: {
      type: Number,
    },
    placeOfBirth: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("user", userSchema);
