import mongoose from "mongoose";
const tenantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  email: { type: String, required: true },
  phonenumber: { type: Number, required: true },
});
const Tenant = mongoose.model("Tenant", tenantSchema);
export default Tenant;
