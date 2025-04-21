import mongoose, { Document, Schema } from "mongoose";

// Product variant interface definition
export interface ProductVariant extends Document {
 
}

// Product variant schema definition
const productVariantSchema: Schema<ProductVariant> = new Schema({
    

},{timestamps: true});

const ProductVariantModel =
    (mongoose.models.ProductVariant as mongoose.Model<ProductVariant>) ||
    (mongoose.model<ProductVariant>("ProductVariant", productVariantSchema))

export default ProductVariantModel;