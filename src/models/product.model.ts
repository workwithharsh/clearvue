import mongoose, { Document, Schema } from 'mongoose';

// Product interface definition
export interface Product extends Document {
  name: string;
  type: string;
  size: string;
  color: string;
  material: string;
  gender: string;
  description: string;
  variants: Schema.Types.ObjectId[];
  reviewCount: number;
  avgRating: number;
  originalPrice: number;
  sellingPrice: number;
  regularDiscount: number;
  images: string[]; // Cloudinary URLs
  isAvailable: boolean;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Product schema definition
const productSchema: Schema<Product> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    size: {
      type: String,
      enum: ['small', 'medium', 'large', 'extra-large'],
      required: true,
      trim: true,
    },
    color: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    material: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'unisex'],
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    variants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'ProductVariant',
      },
    ],
    reviewCount: {
      type: Number,
      default: 0,
    },
    avgRating: {
      type: Number,
      default: 0,
    },
    originalPrice: {
      type: Number,
      required: true,
    },
    sellingPrice: {
      type: Number,
      required: true,
    },
    regularDiscount: {
      type: Number,
      default: 0,
    },
    images: [
      {
        type: String, // Array of Cloudinary URLs
      },
    ],
    isAvailable: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const ProductModel =
  (mongoose.models.Product as mongoose.Model<Product>) ||
  mongoose.model<Product>('Product', productSchema);

export default ProductModel;
