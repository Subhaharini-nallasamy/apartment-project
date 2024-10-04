import mongoose from "mongoose";
const leaseSchema = new mongoose.Schema({
  apartmentid: { type: String },
  tenantid: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  rentAmount: { type: Number },
  status: { type: String, enum: ["active", "terminate"] },
});
const Lease = mongoose.model("Lease", leaseSchema);

export default Lease;