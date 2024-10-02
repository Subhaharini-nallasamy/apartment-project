import { response, Router } from "express";
import Lease from "../../../models/Lease.js";

const router = Router();
router.put("/case/:id", async (req, res) => {
  try {
    const lease = await Lease.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!lease) {
      return res.status(404).send("unable to find lease");
    }

    res.send(lease); // Send the updated customer data
  } catch (error) {
    res.status(500).send("Error updating in lease: " + error.message);
  }
});

router.delete("/case/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const lease = await Lease.findByIdAndUpdate(
      id,
      { status: "terminated" },
      { new: true }
    );
    if (!lease) {
      return res.status(404).send({ message: "Lease agreement not found" });
    }
    res.status(200).send({
      message: "Lease agreement terminated successfully",
      lease,
    });
  } catch (error) {
    console.error("Error terminating lease:", error);
    res.status(500).send({ message: "Error terminating lease agreement" });
  }
});
export default router;
