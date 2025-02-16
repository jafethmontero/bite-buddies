import { Sparkles, Users, Bookmark } from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Create Amazing Recipes with AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Share your culinary creations, discover new recipes, and get
              AI-powered suggestions to enhance your cooking journey.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/register">
                <Button size="lg" type="button" onClick={() => {}}>
                  Get Started
                </Button>
              </Link>
              <Link to="/explore">
                <Button variant="outline" size="lg" type="button">
                  Explore Recipes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to create amazing recipes
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="flex justify-center items-center gap-12">
              <div className="flex flex-col max-w-md">
                <div className="mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex flex-auto flex-col">
                  <h3 className="text-lg font-semibold text-gray-900">
                    AI-Powered Suggestions
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    Get intelligent recipe suggestions and improvements from our
                    AI assistant.
                  </p>
                </div>
              </div>

              <div className="flex flex-col max-w-md">
                <div className="mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex flex-auto flex-col">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Community Driven
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    Share your recipes and discover creations from other food
                    enthusiasts.
                  </p>
                </div>
              </div>

              <div className="flex flex-col max-w-md">
                <div className="mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <Bookmark className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex flex-auto flex-col">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Save & Organize
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    Keep your favorite recipes organized and easily accessible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
