import { Link } from "react-router-dom";
import {
  ChefHat,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <ChefHat className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                RecipeAI
              </span>
            </Link>
            <p className="text-gray-600 text-sm">
              Create, share, and discover amazing recipes powered by artificial
              intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/explore"
                  className="text-gray-600 hover:text-emerald-600"
                >
                  Explore Recipes
                </Link>
              </li>
              <li>
                <Link
                  to="/create"
                  className="text-gray-600 hover:text-emerald-600"
                >
                  Create Recipe
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-600 hover:text-emerald-600"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/my-recipes"
                  className="text-gray-600 hover:text-emerald-600"
                >
                  My Recipes
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter for recipes, tips, and updates.
            </p>
            <form className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} RecipeAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-600 text-sm">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-600 text-sm">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-600 text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
