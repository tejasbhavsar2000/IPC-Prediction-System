import mongoose from "mongoose";

export const firSchema = new mongoose.Schema({
  name: String,
  middleName: String,
  address: String,
  phoneNo: String,
  email: String,
  distance: String,
  direction: String,
  date: Date,
  time: String,
  natureofoffence: String,
  particulars: String,
  description: String,
  detailsofwitnesses: String,
  corpus: String,
  status: Boolean,
  ipc: [Object],
});
export default mongoose.models.FIR || mongoose.model("FIR", firSchema);
