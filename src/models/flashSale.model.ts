import mongoose, { Document, Schema } from 'mongoose';

// Flash sale interface definition
export interface FlashSale extends Document {
  products: Schema.Types.ObjectId[];
  flashDiscount: number;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Flash sale schema definition
const flashSaleSchema: Schema<FlashSale> = new Schema(
  {
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
    flashDiscount: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const FlashSaleModel =
  (mongoose.models.FlashSale as mongoose.Model<FlashSale>) ||
  mongoose.model<FlashSale>('FlashSale', flashSaleSchema);

export default FlashSaleModel;
