import { Link } from "react-router-dom";
import { ChefHat, Search, PlusCircle, BookOpen, LogIn } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
  const isAuthenticated = false;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center  text-primary hover:text-primary-dark"
            >
              <ChefHat className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                BiteBuddies
              </span>
            </Link>
            <div className="hidden md:flex md:ml-8 space-x-8">
              <Link
                to="/explore"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Explore
              </Link>
              <Link
                to="/pricing"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Pricing
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/explore"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Search className="h-5 w-5" />
                </Link>
                <Link
                  to="/create"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <PlusCircle className="h-5 w-5" />
                </Link>
                <Link
                  to="/my-recipes"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <BookOpen className="h-5 w-5" />
                </Link>
                <Button variant="primary" size="sm" type="button">
                  Upgrade to Pro
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="mr-2"
                    type="button"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary" size="sm" type="button">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
