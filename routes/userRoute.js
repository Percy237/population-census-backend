import express from "express";
const router = express.Router();
import { User } from "../models/userModel.js";

router.post("/", async (request, response) => {
  try {
    if (
      !request.body.age ||
      !request.body.name ||
      !request.body.dateOfBirth ||
      !request.body.gender ||
      !request.body.numChildrenUnder21 ||
      !request.body.numChildrenAbove21 ||
      !request.body.placeOfBirth
    ) {
      return response.status(400).send({
        message: "Send all required fields",
      });
    }
    const newUser = {
      age: request.body.age,
      name: request.body.name,
      dateOfBirth: request.body.dateOfBirth,
      gender: request.body.gender,
      numChildrenUnder21: request.body.numChildrenUnder21,
      numChildrenAbove21: request.body.numChildrenAbove21,
      placeOfBirth: request.body.placeOfBirth,
    };

    const user = await User.create(newUser);

    return response.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/", async (request, response) => {
  try {
    const users = await User.find({});
    return response.status(200).json({
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
