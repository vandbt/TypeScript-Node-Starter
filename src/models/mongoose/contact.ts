import mongoose from "mongoose";

// Define Schemes
const contactSchema = new mongoose.Schema({
  contact_id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  phoneNumber: { type: String, default: false },
  email: { type: String, default: false }
},
{
  timestamps: true
});

// Create Model & Export
export const ContactModel = mongoose.model("Contact", contactSchema);