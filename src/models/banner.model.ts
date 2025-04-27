import mongoose, { Document, Schema } from 'mongoose';

// Banner interface definition
export interface Banner extends Document {
  headline: string;
  image: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  type: string;
  priorityOrder: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Banner schema definition
const bannerSchema: Schema<Banner> = new Schema(
  {
    headline: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String, // Cloudinary URL
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ctaText: {
      type: String,
      required: true,
    },
    ctaLink: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    priorityOrder: {
      type: Number,
      min: 1,
      max: 10,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const BannerModel =
  (mongoose.models.Banner as mongoose.Model<Banner>) ||
  mongoose.model<Banner>('Banner', bannerSchema);

export default BannerModel;
