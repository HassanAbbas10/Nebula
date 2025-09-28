import mongoose from 'mongoose';
import logger from './logger.ts';

export const DB_connection = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(`MongoDB Connected 🎃🎯 DB HOST :${connectionInstance.connection.host}`);
  } catch (error) {
    console.log('MongoDB Connection Failed 😂🙏', error);
    logger.error(`Database connection error ${error}`);
    process.exit(1);
  }
};

export default DB_connection;
