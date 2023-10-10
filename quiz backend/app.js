const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://aryanthapak8:Aryanth11@cluster0.8s3by7c.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParses: true, useCreateIndex: true, useFindAndModify: false }
  )
  .then(() => {
    console.log("Connection Established");
  });

const app = express();
app.use(cors());
app.use(express.json());

const credentialsModel = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Credential must have a password"],
  },
  password: {
    type: String,
    required: [true, "Crendentials must have a password"],
  },
  firstName: {
    type: String,
    required: [true, "Credentials must have a first name"],
  },
  lastName: {
    type: String,
    required: [true, "Credentials must have a last name"],
  },
});

const credentials = new mongoose.model("credentials", credentialsModel);

app.route("/api/v1/users/").post(async (req, res) => {
  const credential = await credentials.findOne(req.body);
  if (credential) {
    res.status(200).json({
      message: "Success",
    });
  }
  else{
    res.status(404).json({
      message:"User Not Found"
    })
  }
});

app.route("/api/v1/users/:name").get((req,res)=>{
  
})

app.listen(8080, () => {
  console.log("App is listening on 8080");
});
