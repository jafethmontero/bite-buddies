import { useState } from "react";
import {
  Search,
  Clock,
  UtensilsCrossed,
  Users,
  SlidersHorizontal,
} from "lucide-react";
import Button from "../components/Button";

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookingTime: number;
  difficulty: string;
  servings: number;
  author: {
    name: string;
    avatar: string;
  };
}

const MOCK_RECIPES: Recipe[] = [
  {
    id: "1",
    title: "Classic Margherita Pizza",
    description:
      "A traditional Italian pizza with fresh basil, mozzarella, and tomatoes.",
    image:
      "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&auto=format&fit=crop",
    cookingTime: 45,
    difficulty: "medium",
    servings: 4,
    author: {
      name: "Maria Garcia",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop",
    },
  },
  {
    id: "2",
    title: "Grilled Salmon with Asparagus",
    description:
      "Fresh salmon fillet with grilled asparagus and lemon butter sauce.",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop",
    cookingTime: 30,
    difficulty: "easy",
    servings: 2,
    author: {
      name: "John Smith",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop",
    },
  },
  {
    id: "3",
    title: "Chocolate Lava Cake",
    description:
      "Decadent chocolate cake with a molten center, served with vanilla ice cream.",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop",
    cookingTime: 25,
    difficulty: "hard",
    servings: 6,
    author: {
      name: "Emma Wilson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop",
    },
  },
];

const CATEGORIES = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Desserts",
  "Snacks",
  "Vegetarian",
  "Vegan",
  "Gluten-free",
];

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [cookingTimeFilter, setCookingTimeFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredRecipes = MOCK_RECIPES.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All"; // TODO: Implement category filtering
    const matchesDifficulty =
      selectedDifficulty === "all"
        ? true
        : recipe.difficulty === selectedDifficulty;
    const matchesCookingTime =
      cookingTimeFilter === "all"
        ? true
        : cookingTimeFilter === "under30"
        ? recipe.cookingTime <= 30
        : cookingTimeFilter === "30to60"
        ? recipe.cookingTime > 30 && recipe.cookingTime <= 60
        : recipe.cookingTime > 60;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesDifficulty &&
      matchesCookingTime
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search and Filter Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative flex-1 max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden"
          >
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className={`mb-8 ${showFilters ? "block" : "hidden sm:block"}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Categories */}
          <div className="relative">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              title="Category"
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md"
            >
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <UtensilsCrossed className="h-4 w-4 inline mr-1" />
              Difficulty
            </label>
            <select
              title="Difficulty"
              id="difficulty"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md"
            >
              <option value="all">All Difficulties</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          {/* Cooking Time */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Clock className="h-4 w-4 inline mr-1" />
              Cooking Time
            </label>
            <select
              title="Cooking Time"
              id="cookingTime"
              value={cookingTimeFilter}
              onChange={(e) => setCookingTimeFilter(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md"
            >
              <option value="all">Any Time</option>
              <option value="under30">Under 30 mins</option>
              <option value="30to60">30-60 mins</option>
              <option value="over60">Over 60 mins</option>
            </select>
          </div>
        </div>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200"
          >
            <div className="relative h-48">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
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
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={recipe.author.avatar}
                    alt={recipe.author.name}
                    className="h-6 w-6 rounded-full mr-2"
                  />
                  <span className="text-sm text-gray-600">
                    {recipe.author.name}
                  </span>
                </div>
                <Button variant="outline" size="sm">
                  View Recipe
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No recipes found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
