import mongoose, { Document, Schema } from 'mongoose';

// Review interface definition
export interface Review extends Document {
  user: Schema.Types.ObjectId;
  product: Schema.Types.ObjectId;
  rating: number;
  comment: string;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Review schema definition
const reviewSchema: Schema<Review> = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const ReviewModel =
  (mongoose.models.Review as mongoose.Model<Review>) ||
  mongoose.model<Review>('Review', reviewSchema);

export default ReviewModel;
