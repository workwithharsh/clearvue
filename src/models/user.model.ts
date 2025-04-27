import mongoose, { Document, Schema } from 'mongoose';

// User interface definition
export interface User extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    pinCode: string;
  };
  password: string;
  avatar: string; // Cloudinary URL
  role: string;
  favorites: Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

// User schema definition
const userSchema: Schema<User> = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: /^\d{10}$/,
    },
    address: {
      street: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },
      state: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },
      country: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },
      pinCode: {
        type: String,
        required: true,
        trim: true,
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    avatar: {
      type: String, // Cloudinary URL
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
  },
  { timestamps: true }
);

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User', userSchema);

export default UserModel;
