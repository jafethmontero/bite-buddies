import { Sparkles, Users, Bookmark } from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="w-full bg-white">
        <div className="relative pt-24 sm:pt-32 sm:pb-24 max-w-7xl mx-auto">
          <div className="mx-auto px-6 lg:px-8">
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
      </div>

      {/* Features Section */}
      <div className="py-16 max-w-7xl mx-auto">
        <div>
          <div className="mx-auto lg:text-center pb-16 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to create amazing recipes
            </h2>
          </div>
          <div className="mx-auto max-w-7xl">
            <div className="flex justify-center items-center gap-12">
              {/* Feature Cards */}
              <div className="flex flex-col justify-center items-baseline gap-4">
                <div className="flex justify-center items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    AI-Powered Suggestions
                  </h3>
                </div>
                <p className="mt-2 text-base text-gray-600">
                  Get intelligent recipe suggestions and improvements from our
                  AI assistant.
                </p>
              </div>

              <div className="flex flex-col justify-center items-baseline gap-4">
                <div className="flex justify-center items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Community Driven
                  </h3>
                </div>
                <p className="mt-2 text-base text-gray-600">
                  Share your recipes and discover creations from other food
                  enthusiasts.
                </p>
              </div>

              <div className="flex flex-col justify-center items-baseline gap-4">
                <div className="flex justify-center items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Bookmark className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Save & Organize
                  </h3>
                </div>
                <p className="mt-2 text-base text-gray-600">
                  Keep your favorite recipes organized and easily accessible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
