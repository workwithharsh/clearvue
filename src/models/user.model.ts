import mongoose, { Document, Schema } from "mongoose";

// User interface definition
export interface User extends Document {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: {
      street: string,
      city: string,
     state: string,
      country: string,
      pinCode: string,
    },
    password: string,
    avatar: string, // Cloudinary URL
    role: string,
    favorites: string[],
    createdAt: Date,
    updatedAt: Date,
}

// User schema definition
const userSchema: Schema<User> = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: (v: string) => {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            message: (props) => `${props.value} is not a valid email address`,
        },
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: (v: string) => {
                return /^\d{10}$/.test(v);
            },
            message: (props) => `${props.value} is not a valid phone number`,
        },
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
        },
        state: {
            type: String,
            required: true,
            trim: true,
        },
        country: {
            type: String,
            required: true,
            trim: true,
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
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }]
},{timestamps: true});

const Usermodel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User", userSchema))

export default Usermodel;