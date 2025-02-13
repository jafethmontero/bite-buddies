import { Schema, Document, model } from "mongoose";

interface Recipe extends Document {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  createdAt: Date;
  updatedAt: Date;
}

const RecipeSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: [String], required: true },
  prepTime: { type: Number, required: true },
  cookTime: { type: Number, required: true },
  servings: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const RecipeModel = model<Recipe>("Recipe", RecipeSchema);

export default RecipeModel;
