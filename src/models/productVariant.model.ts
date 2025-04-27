import mongoose, { Document, Schema } from 'mongoose';

// Product variant interface definition
export interface ProductVariant extends Document {
  name: string;
  attribute: string;
  variants: string[];
  products: Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

// Product variant schema definition
const productVariantSchema: Schema<ProductVariant> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    attribute: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    variants: [
      {
        type: String,
        required: true,
      },
    ],
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
  },
  { timestamps: true }
);

const ProductVariantModel =
  (mongoose.models.ProductVariant as mongoose.Model<ProductVariant>) ||
  mongoose.model<ProductVariant>('ProductVariant', productVariantSchema);

export default ProductVariantModel;
