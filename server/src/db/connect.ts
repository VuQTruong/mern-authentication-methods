import mongoose from 'mongoose';

const connectToDB = () => {
  const MONGODB_URL = process.env.MONGODB_URL!;
  mongoose
    .connect(MONGODB_URL)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.log('Error connecting to MongoDB:', error);
    });
};

export default connectToDB;
