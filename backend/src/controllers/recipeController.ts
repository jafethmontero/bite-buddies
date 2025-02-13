import type { Request, Response } from "express";
import Recipe from "../models/Recipe";

// Create a new recipe
export const createRecipe = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Get all recipes
export const getRecipes = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Get a single recipe by ID
export const getRecipeById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      res.status(404).json({ message: "Recipe not found" });
      return;
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Update a recipe by ID
export const updateRecipe = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!recipe) {
      res.status(404).json({ message: "Recipe not found" });
      return;
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Delete a recipe by ID
export const deleteRecipe = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      res.status(404).json({ message: "Recipe not found" });
      return;
    }
    res.status(200).json({ message: "Recipe deleted" });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
