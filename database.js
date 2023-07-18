const mongoose = require("mongoose");
const username = "node js";
const password = "Ely34";
async function connect() {
  // URL DE connection revoir mot de pass avec robin
  await mongoose.connect(
    "mongodb+srv://elycheikhdiop2:Ely34@visitparis.1xjsykk.mongodb.net/?retryWrites=true&w=majority"
  );
}

connect()
  .then(() => {
    console.log("La base de donnee est connectee");
  })
  .catch((error) => console.log(error));
