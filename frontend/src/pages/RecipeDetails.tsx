import { useState } from "react";
import {
  Clock,
  Users,
  UtensilsCrossed,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  Star,
  Send,
  MoreVertical,
} from "lucide-react";
import Button from "../components/Button";

interface Comment {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  likes: number;
}

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
    recipes: number;
    followers: number;
  };
  ingredients: {
    name: string;
    amount: string;
    unit: string;
  }[];
  instructions: string[];
  likes: number;
  comments: Comment[];
  createdAt: string;
}

// Mock data for the recipe
const MOCK_RECIPE: Recipe = {
  id: "1",
  title: "Classic Margherita Pizza",
  description:
    "A traditional Italian pizza with fresh basil, mozzarella, and tomatoes. Perfect for a family dinner or entertaining guests.",
  image:
    "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=1200&auto=format&fit=crop",
  cookingTime: 45,
  difficulty: "medium",
  servings: 4,
  author: {
    name: "Maria Garcia",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop",
    recipes: 48,
    followers: 1240,
  },
  ingredients: [
    { name: "Pizza Dough", amount: "500", unit: "g" },
    { name: "Fresh Mozzarella", amount: "200", unit: "g" },
    { name: "San Marzano Tomatoes", amount: "400", unit: "g" },
    { name: "Fresh Basil", amount: "10", unit: "leaves" },
    { name: "Extra Virgin Olive Oil", amount: "2", unit: "tbsp" },
    { name: "Sea Salt", amount: "1", unit: "tsp" },
  ],
  instructions: [
    "Preheat your oven to 500°F (260°C) with a pizza stone inside.",
    "Roll out the pizza dough on a floured surface to your desired thickness.",
    "Crush the tomatoes by hand and spread evenly over the dough.",
    "Tear the mozzarella into small pieces and distribute over the pizza.",
    "Bake for 12-15 minutes until the crust is golden and cheese is bubbling.",
    "Remove from oven, add fresh basil leaves, and drizzle with olive oil.",
    "Season with sea salt to taste and serve immediately.",
  ],
  likes: 342,
  comments: [
    {
      id: "1",
      user: {
        name: "John Smith",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop",
      },
      content:
        "Made this last night and it was absolutely delicious! The fresh basil makes all the difference.",
      createdAt: "2024-03-15T10:30:00Z",
      likes: 12,
    },
    {
      id: "2",
      user: {
        name: "Emma Wilson",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop",
      },
      content:
        "Great recipe! I added some garlic to the tomato sauce and it was amazing.",
      createdAt: "2024-03-14T15:45:00Z",
      likes: 8,
    },
  ],
  createdAt: "2024-03-10T08:00:00Z",
};

export default function RecipeDetails() {
  const [recipe] = useState<Recipe>(MOCK_RECIPE);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [servings, setServings] = useState(recipe.servings);

  const handleLike = () => {
    setIsLiked(!isLiked);
    // TODO: Implement like functionality with backend
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    // TODO: Implement save functionality with backend
  };

  const handleShare = () => {
    // TODO: Implement share functionality
    navigator.clipboard.writeText(window.location.href);
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement comment functionality with backend
    setNewComment("");
  };

  const adjustServings = (newServings: number) => {
    setServings(newServings);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-12">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4">
              {recipe.title}
            </h1>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <img
                  src={recipe.author.avatar}
                  alt={recipe.author.name}
                  className="h-10 w-10 rounded-full border-2 border-white"
                />
                <div className="ml-3">
                  <p className="text-white font-medium">{recipe.author.name}</p>
                  <p className="text-gray-300 text-sm">
                    {recipe.author.recipes} recipes · {recipe.author.followers}{" "}
                    followers
                  </p>
                </div>
              </div>
              <Button
                variant="secondary"
                size="sm"
                className="!bg-white/10 !text-white hover:!bg-white/20"
              >
                Follow
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Recipe Stats */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-2">
                    <Clock className="h-6 w-6" />
                  </div>
                  <p className="text-sm text-gray-500">Cooking Time</p>
                  <p className="font-semibold">{recipe.cookingTime} mins</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-2">
                    <UtensilsCrossed className="h-6 w-6" />
                  </div>
                  <p className="text-sm text-gray-500">Difficulty</p>
                  <p className="font-semibold capitalize">
                    {recipe.difficulty}
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-2">
                    <Users className="h-6 w-6" />
                  </div>
                  <p className="text-sm text-gray-500">Servings</p>
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={() => adjustServings(Math.max(1, servings - 1))}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      -
                    </button>
                    <p className="font-semibold">{servings}</p>
                    <button
                      onClick={() => adjustServings(servings + 1)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
              <h2 className="text-xl font-semibold mb-4">About this recipe</h2>
              <p className="text-gray-600">{recipe.description}</p>
            </div>

            {/* Ingredients */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
              <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 mr-3" />
                    <span className="font-medium mr-2">
                      {(
                        Number(ingredient.amount) *
                        (servings / recipe.servings)
                      ).toFixed(1)}{" "}
                      {ingredient.unit}
                    </span>
                    <span className="text-gray-600">{ingredient.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
              <h2 className="text-xl font-semibold mb-4">Instructions</h2>
              <div className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <div key={index} className="flex">
                    <div className="flex-none">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-100 text-emerald-600 font-semibold">
                        {index + 1}
                      </div>
                    </div>
                    <p className="ml-4 text-gray-600">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Comments */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Comments</h2>

              {/* Comment Form */}
              <form onSubmit={handleComment} className="mb-6">
                <div className="flex items-start space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop"
                    alt="Your avatar"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex-1">
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Share your experience with this recipe..."
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                      rows={3}
                    />
                    <div className="mt-3 flex justify-end">
                      <Button type="submit" size="sm">
                        <Send className="h-4 w-4 mr-2" />
                        Post Comment
                      </Button>
                    </div>
                  </div>
                </div>
              </form>

              {/* Comments List */}
              <div className="space-y-6">
                {recipe.comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-4">
                    <img
                      src={comment.user.avatar}
                      alt={comment.user.name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">
                            {comment.user.name}
                          </h4>
                          <button className="text-gray-400 hover:text-gray-500">
                            <MoreVertical className="h-4 w-4" />
                            some text
                          </button>
                        </div>
                        <p className="text-gray-600">{comment.content}</p>
                      </div>
                      <div className="flex items-center space-x-4 mt-2 text-sm">
                        <button className="text-gray-500 hover:text-gray-700 flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          {comment.likes}
                        </button>
                        <span className="text-gray-400">·</span>
                        <button className="text-gray-500 hover:text-gray-700">
                          Reply
                        </button>
                        <span className="text-gray-400">·</span>
                        <span className="text-gray-400">
                          {new Date(comment.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Action Buttons */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
              <div className="grid grid-cols-4 gap-4">
                <button
                  onClick={handleLike}
                  className="flex flex-col items-center text-gray-500 hover:text-emerald-600"
                >
                  <div
                    className={`p-3 rounded-full ${
                      isLiked
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-gray-100"
                    }`}
                  >
                    <Heart
                      className={`h-6 w-6 ${isLiked ? "fill-current" : ""}`}
                    />
                  </div>
                  <span className="text-xs mt-1">{recipe.likes}</span>
                </button>
                <button
                  onClick={handleComment}
                  className="flex flex-col items-center text-gray-500 hover:text-emerald-600"
                >
                  <div className="p-3 rounded-full bg-gray-100">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <span className="text-xs mt-1">{recipe.comments.length}</span>
                </button>
                <button
                  onClick={handleSave}
                  className="flex flex-col items-center text-gray-500 hover:text-emerald-600"
                >
                  <div
                    className={`p-3 rounded-full ${
                      isSaved
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-gray-100"
                    }`}
                  >
                    <Bookmark
                      className={`h-6 w-6 ${isSaved ? "fill-current" : ""}`}
                    />
                  </div>
                  <span className="text-xs mt-1">Save</span>
                </button>
                <button
                  onClick={handleShare}
                  className="flex flex-col items-center text-gray-500 hover:text-emerald-600"
                >
                  <div className="p-3 rounded-full bg-gray-100">
                    <Share2 className="h-6 w-6" />
                  </div>
                  <span className="text-xs mt-1">Share</span>
                </button>
              </div>
            </div>

            {/* Recipe Rating */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-gray-300" />
                <span className="ml-2 text-sm text-gray-600">(4.2)</span>
              </div>
              <Button variant="outline" className="w-full">
                Rate this recipe
              </Button>
            </div>

            {/* More from Author */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold mb-4">
                More from {recipe.author.name}
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        1550547660 + i
                      }?w=100&auto=format&fit=crop`}
                      alt="Recipe thumbnail"
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Italian Pasta Recipe
                      </h4>
                      <p className="text-sm text-gray-500">30 mins · Easy</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
