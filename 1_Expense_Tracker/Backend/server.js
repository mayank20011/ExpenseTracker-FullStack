import express from "express";
import dotenv from "dotenv";
import color from "colors";
import router from "./routes/transaction.js";
import cors from "cors";
dotenv.config({ path: "./config/config.env" });

const server = express();
const PORT = process.env.PORT || 5000;

server.use(cors());
server.use(express.json());
server.use("/api/v1/transactions/", router);

server.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`.yellow.bold);
});
