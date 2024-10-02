import mongoose from "mongoose";
const apartmentSchema = new mongoose.Schema({
  ownername: { type: String, required: true },
  address: {
    type: String,
  },
  rentAmount: { type: Number },
});
//  schema is a method or function
const Apartment = mongoose.model("Apartment", apartmentSchema);
export default Apartment;
