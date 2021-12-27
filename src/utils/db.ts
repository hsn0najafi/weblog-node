import mongoose from "mongoose";

export const dataBaseConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI!);
    console.log(conn.connection.host);
  } catch (err) {
    console.log(err);
  }
};
