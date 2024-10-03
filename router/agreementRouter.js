import { response, Router } from "express";
import Lease from "../../../models/Lease.js";

const router = Router();

router.post("/go", async (req, res) => {
  try {
    const lease = Lease(req.body);
    await lease.save();
    res.send("Data created sucessfully!");
  } catch (error) {
    res.send("Error: " + error);
  }
});

router.get("/come/:tenantid", async (req, res) => {
  try {
    const { tenantid } = req.params;

    const lease = await Lease.find({ tenantid });
    if (!lease.length) {
      return res.send({ message: "There is no lease agreement" });
    }
    res.send(lease);
  } catch (error) {
    res.send("Error: " + error);
  }
});
