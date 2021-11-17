const mongoose = require("mongoose");
require("dotenv").config();
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
const uri =
  "mongodb+srv://Trevaleo:123@travaleo.7ec5r.mongodb.net/Trevaleo?retryWrites=true&w=majority";
try {
  mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (data) => {
      console.log("Travalue online DB connected successfully");
    }
  );
} catch (error) {
  console.log("could not connect");
}
