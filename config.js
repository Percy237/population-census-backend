export const PORT = 5555;

import mongoose from "mongoose";
const mongoAtlasUri = `mongodb+srv://percylinkwe:tsembompercy18.@cluster0.befbqgf.mongodb.net/census`;
export function mongooseConnection() {
  try {
    mongoose.connect(mongoAtlasUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.log("could not connect");
  }
  const dbConnection = mongoose.connection;
  dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
  dbConnection.once("open", () => console.log("Connected to DB!"));
}
// module.exports = mongooseConnection;
