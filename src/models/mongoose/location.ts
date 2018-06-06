import mongoose from "mongoose";

// Define Schemes
const locationSchema = new mongoose.Schema({
  location_id: { type: Number, required: true, unique: true },
  address: { type: String, required: true }
},
{
  timestamps: true
});

// Create Model & Export
export const LocationModel = mongoose.model("Location", locationSchema);