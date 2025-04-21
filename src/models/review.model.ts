import mongoose, { Document, Schema } from "mongoose";

// Review interface definition
export interface Review extends Document {
 
}

// Review schema definition
const reviewSchema: Schema<Review> = new Schema({
    

},{timestamps: true});

const ReviewModel = (mongoose.models.Review as mongoose.Model<Review>) || (mongoose.model<Review>("Review", reviewSchema))

export default ReviewModel;