router.put("/case/:id", async (req, res) => {
    try {
      const tenant = await Tenant.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
  
      if (!tenant) {
        return res.status(404).send("unable to find tenant");
      }
  
      res.send(tenant); // Send the updated customer data
    } catch (error) {
      res.status(500).send("Error updating in tenant: " + error.message);
    }
  });
  
  router.delete("/case/:id", async (req, res) => {
    try {
      const tenant = await Tenant.findByIdAndDelete(req.params.id);
      if (!tenant) {
        return res.status(404).send("unable to find tenant");
      }
      res.send(tenant); // Send the deleted customer data
    } catch (error) {
      res.status(500).send("Error deleting  occur in tenant: " + error.message);
    }
  });
  
  export default router;