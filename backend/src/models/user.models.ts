import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      min: 6,
      trim: true,
    },
    profilePic: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('Users', userSchema);
export default User;
