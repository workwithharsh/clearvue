import mongoose from "mongoose";

/**
 * Interface representing an Admin document in MongoDB.
*/
export interface IAdmin extends mongoose.Document{
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
}

/**
 * Mongoose schema for the Admin collection.
 * 
 * @returns {mongoose.Schema<IAdmin>}
 */
const AdminSchema = new mongoose.Schema<IAdmin>({
    firstName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
})

const Admin = mongoose.models.Admin || mongoose.model<IAdmin>("Admin", AdminSchema);

export default Admin;