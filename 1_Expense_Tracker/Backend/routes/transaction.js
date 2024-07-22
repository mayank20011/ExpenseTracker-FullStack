import {readTransaction, createTransaction, deleteTransaction, updateTransaction} from "../controller/transaction.js";
import express from "express";
const router=express.Router();

router.get('/',readTransaction)
.post('/',createTransaction)
.delete('/:id',deleteTransaction)
.patch('/:id',updateTransaction);

export default router;