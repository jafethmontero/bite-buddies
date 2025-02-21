import {
  BookOpen,
  ChefHat,
  LogIn,
  PlusCircle,
  Search,
  LogOut,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import Button from "./Button";

export default function Navbar() {
  const { isAuthenticated } = useUserStore();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {/* 🌟 Top Logo (Visible only on Mobile) */}
      <div className="fixed top-0 left-0 right-0 bg-white py-3 md:hidden flex justify-center z-50 border-b border-gray-200">
        <Link to="/" className="flex items-center group">
          <ChefHat className="h-8 w-8 text-primary group-hover:text-primary-dark" />
          <p className="ml-2 text-xl font-bold text-gray-800 group-hover:text-primary-dark">
            BiteBuddies
          </p>
        </Link>
      </div>

      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <ChefHat className="h-8 w-8 text-primary group-hover:text-primary-dark" />
              <p className="text-lg relative w-max">
                <span className="ml-2 text-xl font-bold text-gray-800 group-hover:text-primary-dark">
                  BiteBuddies
                </span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-primary-dark group-hover:w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-primary-dark group-hover:w-3/6"></span>
              </p>
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-6">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/explore"
                    className={`${
                      currentPath === "/explore"
                        ? "text-primary"
                        : "text-gray-600"
                    } hover:text-primary-dark group`}
                  >
                    <p className="text-lg relative w-max">
                      <span>Explore</span>
                      <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-primary-dark group-hover:w-3/6"></span>
                      <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-primary-dark group-hover:w-3/6"></span>
                    </p>
                  </Link>
                  <Link
                    to="/create"
                    className={`${
                      currentPath === "/create"
                        ? "text-primary"
                        : "text-gray-600"
                    } hover:text-primary-dark group`}
                  >
                    <p className="text-lg relative w-max">
                      <span>Create</span>
                      <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-primary-dark group-hover:w-3/6"></span>
                      <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-primary-dark group-hover:w-3/6"></span>
                    </p>
                  </Link>
                  <Link
                    to="/my-recipes"
                    className={`${
                      currentPath === "/my-recipes"
                        ? "text-primary"
                        : "text-gray-600"
                    } hover:text-primary-dark group`}
                  >
                    <p className="text-lg relative w-max">
                      <span>My recipes</span>
                      <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-primary-dark group-hover:w-3/6"></span>
                      <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-primary-dark group-hover:w-3/6"></span>
                    </p>
                  </Link>
                  {/* <Link to="/pricing">
                    <Button variant="primary" size="sm" type="button">
                      Upgrade to Pro
                    </Button>
                  </Link> */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="mr-2"
                    type="button"
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </>
              ) : (
                <>
                  {/* Auth buttons */}
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

      {/* 🌟 Bottom Navigation Bar (Visible only on Mobile) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden flex justify-around py-3 z-10">
        <Link
          to="/explore"
          className="flex flex-col items-center text-gray-600 hover:text-primary-dark"
        >
          <Search className="h-6 w-6" />
          <span className="text-xs">Explore</span>
        </Link>
        <Link
          to="/create"
          className="flex flex-col items-center text-gray-600 hover:text-primary-dark"
        >
          <PlusCircle className="h-6 w-6" />
          <span className="text-xs">Create</span>
        </Link>
        <Link
          to="/my-recipes"
          className="flex flex-col items-center text-gray-600 hover:text-primary-dark"
        >
          <BookOpen className="h-6 w-6" />
          <span className="text-xs">Recipes</span>
        </Link>
      </nav>
    </>
  );
}
