import mongoose from "mongoose";

const ObjectId = mongoose.SchemaTypes.ObjectId;


// Define Schemes
const todoSchema = new mongoose.Schema({
  todo_id: { type: Number, required: true, unique: true },
  content: { type: String, required: true },
  completed: { type: String, default: false },
  contacts: [{ type: ObjectId, ref: "Contact" }],
  location: { type: ObjectId, ref: "Location" },
},
{
  timestamps: true
});

// Create Model & Export
export const TodoModel = mongoose.model("Todo", todoSchema);