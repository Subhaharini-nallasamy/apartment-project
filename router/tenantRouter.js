import { response, Router } from "express";
import Tenant from "../../../models/Tenant.js";

const router = Router();

router.post("/go", async (req, res) => {
  try {
    const tenant = Tenant(req.body);
    await tenant.save();
    res.send("Data created successfully!");
  } catch (error) {
    res.send("Error: " + error);
  }
});

router.get("/come/:email", async (req, res) => {
  try {
    const { email } = req.params;

    const tenant = await Tenant.find({ email }); // Retrieves tenants with the specified email
    if (!tenant.length) {
      return res.status(404).json({ message: "Tenant not found" });
    }
    res.status(200).send(tenant);
  } catch (error) {
    res.send("Error: " + error);
  }
});
export default router;
