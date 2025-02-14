import { Router } from "express";
import {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipeController";

const router = Router();

// Get all recipes
router.get("/", getRecipes);

// Get a single recipe by ID
router.get("/:id", getRecipeById);

// Create a new recipe
router.post("/new", createRecipe);

// Update an existing recipe
router.put("/:id", updateRecipe);

// Delete a recipe
router.delete("/:id", deleteRecipe);

export default router;
