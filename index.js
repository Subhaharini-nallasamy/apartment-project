import express from "express";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import tenantRouter from "./router/tenantRouter.js";
import leaseRouter from "./router/leaseRouter.js";
const app = express();
dotenv.config();
app.use(bodyparser.json());
app.use("/tenant", tenantRouter);
app.use("/lease", leaseRouter);

const PORT = process.env.PORT;
const MONGO_URI = process.env.MPNGO_URI;
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB Connected");
  app.listen(PORT, () => {
    console.log("server start at PORT " + PORT);
  });
});
