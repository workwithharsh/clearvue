import mongoose, { Document, Schema } from "mongoose";

// Flash sale interface definition
export interface FlashSale extends Document {
 
}

// Flash sale schema definition
const flashSaleSchema: Schema<FlashSale> = new Schema({
    

},{timestamps: true});

const FlashSaleModel =
    (mongoose.models.FlashSale as mongoose.Model<FlashSale>) ||
    (mongoose.model<FlashSale>("FlashSale", flashSaleSchema))

export default FlashSaleModel;