import mongoose from "mongoose";
import config from "config";
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    console.log(db, "[][][][]");
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB is Connected...");
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export { connectDB };
