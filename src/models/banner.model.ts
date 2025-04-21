import mongoose, { Document, Schema } from "mongoose";

// Banner interface definition
export interface Banner extends Document {
 
}

// Banner schema definition
const bannerSchema: Schema<Banner> = new Schema({
    

},{timestamps: true});

const BannerModel = (mongoose.models.Banner as mongoose.Model<Banner>) || (mongoose.model<Banner>("Banner", bannerSchema))

export default BannerModel;