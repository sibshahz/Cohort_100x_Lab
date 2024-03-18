import mongoose, { Schema, model } from 'mongoose';

const mongoUrl: string = process.env.MONGO_URL || 'mongodb://mongo:27017/myDatabase';
// mongo:27017 resolves to name OR dns of mongo container that is running on the same network this app is running on

// Connect to MongoDB
mongoose.connect(mongoUrl)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a User schema
interface IUser {
  name: string;
  age: number;
  email: string;
}

const UserSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true }
});

// Create a User model
export const User = model<IUser>('User', UserSchema);