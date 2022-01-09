import mongoose from "mongoose";

export const dataBaseConnection = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI!);
  } catch (err) {
    console.log(err);

    // Close from App When Can't Connect to DataBase
    process.exit(1);
  }
};
