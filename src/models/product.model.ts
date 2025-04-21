import mongoose, { Document, Schema } from "mongoose";

// Product interface definition
export interface Product extends Document {
 
}

// Product schema definition
const productSchema: Schema<Product> = new Schema({
    

},{timestamps: true});

const ProductModel = (mongoose.models.Product as mongoose.Model<Product>) || (mongoose.model<Product>("Product", productSchema))

export default ProductModel;