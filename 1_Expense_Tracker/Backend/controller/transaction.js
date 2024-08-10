import mongoose from "mongoose";
import TransactionSchema from "../models/transaction.js";
import colors from "colors";

// connecting with database
mongoose
  .connect(
    "mongodb+srv://mayankbehlmb1:Bona_fighter32@mycluster.l9olbpg.mongodb.net/expenseTracker"
  )
  .then(() => {
    console.log("Connection with db is successfull".green.bold);
  })
  .catch(() => {
    console.log("Connection to database Failed".red.bold);
  });

// creating a model for schema
const transaction = mongoose.model("transaction", TransactionSchema);

// controller function
export function readTransaction(req, res) {
  transaction
    .find()
    .then((data) => {
      // 200 for server is working great and you got your data back
      res.status(200).json({
        success: true,
        datagot: data,
      });
    })
    .catch((err) => {
      // 500 is server error
      res.status(500).json({
        success: false,
        error: err,
      });
    });
}

export function createTransaction(req, res) {
  let { text, amount } = req.body;
  let obj = new transaction();
  obj.text = text;
  obj.amount = amount;
  obj
    .save()
    .then((savedTransaction) => {
      // 201 is for resource created successfully
      res.status(201).json(obj);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        // This will work in case of validation error, eg:- when text or amount is not send
        let messageerror = [];
        for (let key in err.errors) {
          messageerror.push(err.errors[key].message);
        }
        // 400 is a client error client did not send full data thats why collection cant be created
        res.status(400).json({
          success: false,
          error: messageerror,
        });
      } else {
        // This is Generic error, this error might occur due to server problem
        res.status(500).json({
          success: false,
          error: "Server Error",
        });
      }
    });
}

export function deleteTransaction(req, res) {
  const id = req.params.id;
  transaction
    .findOneAndDelete({ _id: id })
    .then((data) => {
      res.json({
        success: true,
        dataDeleted: data,
      });
    })
    .catch((err) => {
      res.json({
        success: false,
        err: `No Such Data in database with id ${id}`,
      });
    });
}

export function updateTransaction(req, res) {
  const id = req.params.id;
  let { text, amount } = req.body;
  transaction
    .findOneAndReplace({ _id: id }, { text: text, amount: amount })
    .then((data) => {
      res.json({
        success: true,
        data: data,
      });
    })
    .catch(() => {
      res.json({
        success: false,
        error:`No Such data in database with id: ${id}`,
      });
    });
}
