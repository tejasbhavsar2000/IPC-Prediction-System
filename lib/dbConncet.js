import mongoose from "mongoose";
async function connect() {
  const uri = `mongodb://localhost:27017/IPC`;
  await mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log(" Mongoose is connected");
    }
  );
}

export default connect;
