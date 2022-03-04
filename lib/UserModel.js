import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  type: String,
  password: String,
  token: String,
});
export default mongoose.models.User || mongoose.model("User", userSchema);
