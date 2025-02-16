import { useState } from "react";
import {
  Clock,
  Users,
  Plus,
  BookmarkCheck,
  ChefHat,
  Pencil,
  Trash2,
} from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookingTime: number;
  difficulty: string;
  servings: number;
  createdAt: string;
  saved?: boolean;
}

const MOCK_MY_RECIPES: Recipe[] = [
  {
    id: "1",
    title: "Homemade Sourdough Bread",
    description:
      "A rustic sourdough bread with a perfect crust and chewy interior.",
    image:
      "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=800&auto=format&fit=crop",
    cookingTime: 180,
    difficulty: "hard",
    servings: 8,
    createdAt: "2024-03-15",
  },
  {
    id: "2",
    title: "Green Thai Curry",
    description:
      "Authentic Thai green curry with coconut milk and fresh vegetables.",
    image:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&auto=format&fit=crop",
    cookingTime: 45,
    difficulty: "medium",
    servings: 4,
    createdAt: "2024-03-10",
  },
];

const MOCK_SAVED_RECIPES: Recipe[] = [
  {
    id: "3",
    title: "Classic Tiramisu",
    description:
      "Traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop",
    cookingTime: 60,
    difficulty: "medium",
    servings: 8,
    createdAt: "2024-03-12",
    saved: true,
  },
  {
    id: "4",
    title: "Spicy Ramen Bowl",
    description:
      "Homemade ramen with rich broth, fresh noodles, and marinated eggs.",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop",
    cookingTime: 90,
    difficulty: "hard",
    servings: 2,
    createdAt: "2024-03-08",
    saved: true,
  },
];

type Tab = "created" | "saved";

export default function MyRecipes() {
  const [activeTab, setActiveTab] = useState<Tab>("created");
  const [recipes, setRecipes] = useState<Recipe[]>(MOCK_MY_RECIPES);
  const [savedRecipes, setSavedRecipes] =
    useState<Recipe[]>(MOCK_SAVED_RECIPES);

  const handleDelete = (recipeId: string) => {
    // TODO: Implement delete functionality with backend
    if (activeTab === "created") {
      setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
    } else {
      setSavedRecipes(savedRecipes.filter((recipe) => recipe.id !== recipeId));
    }
  };

  const handleUnsave = (recipeId: string) => {
    // TODO: Implement unsave functionality with backend
    setSavedRecipes(savedRecipes.filter((recipe) => recipe.id !== recipeId));
  };

  const currentRecipes = activeTab === "created" ? recipes : savedRecipes;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-2xl font-bold text-gray-900">My Recipes</h1>
        <Link to="/create">
          <Button type="button">
            <Plus className="h-4 w-4 mr-2" />
            Create New Recipe
          </Button>
        </Link>
      </div>

      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("created")}
              className={`${
                activeTab === "created"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <ChefHat className="h-5 w-5 mr-2" />
              Created Recipes
              <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2.5 rounded-full text-xs">
                {recipes.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`${
                activeTab === "saved"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <BookmarkCheck className="h-5 w-5 mr-2" />
              Saved Recipes
              <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2.5 rounded-full text-xs">
                {savedRecipes.length}
              </span>
            </button>
          </nav>
        </div>
      </div>

      {currentRecipes.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
            {activeTab === "created" ? (
              <ChefHat className="h-8 w-8 text-gray-400" />
            ) : (
              <BookmarkCheck className="h-8 w-8 text-gray-400" />
            )}
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {activeTab === "created"
              ? "You haven't created any recipes yet"
              : "No saved recipes"}
          </h3>
          <p className="text-gray-500 mb-6">
            {activeTab === "created"
              ? "Start sharing your culinary creations with the world!"
              : "Save your favorite recipes to try them later."}
          </p>
          {activeTab === "created" && (
            <Link to="/create">
              <Button type="button">
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Recipe
              </Button>
            </Link>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 group"
            >
              <div className="relative h-48">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity" />
                <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {activeTab === "created" ? (
                    <>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                          /* TODO: Implement edit */
                        }}
                        className="!bg-white"
                        type="button"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => handleDelete(recipe.id)}
                        className="!bg-white text-red-600 hover:text-red-700"
                        type="button"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handleUnsave(recipe.id)}
                      className="!bg-white text-red-600 hover:text-red-700"
                      type="button"
                    >
                      <BookmarkCheck className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {recipe.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {recipe.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {recipe.cookingTime}m
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {recipe.servings}
                    </span>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      recipe.difficulty === "easy"
                        ? "bg-green-100 text-green-800"
                        : recipe.difficulty === "medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {recipe.difficulty.charAt(0).toUpperCase() +
                      recipe.difficulty.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
