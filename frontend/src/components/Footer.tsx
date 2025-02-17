import { ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex-col md:flex-row flex md:justify-around items-center gap-8 md:gap-0">
          {/* Brand */}
          <div className="space-y-4 max-w-xs">
            <Link to="/" className="flex items-center">
              <ChefHat className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                BiteBuddies
              </span>
            </Link>
            <p className="text-gray-600 text-sm">
              Create, share, and discover amazing recipes powered by artificial
              intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="min-w-xs">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/explore"
                  className="text-gray-600 hover:text-primary"
                  onClick={scrollToTop}
                >
                  Explore Recipes
                </Link>
              </li>
              <li>
                <Link
                  to="/create"
                  className="text-gray-600 hover:text-primary"
                  onClick={scrollToTop}
                >
                  Create Recipe
                </Link>
              </li>
              <li>
                <Link
                  to="/my-recipes"
                  className="text-gray-600 hover:text-primary"
                  onClick={scrollToTop}
                >
                  My Recipes
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="min-w-xs">
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://google.com"
                  className="text-gray-600 hover:text-primary"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="https://google.com"
                  className="text-gray-600 hover:text-primary"
                >
                  Community Guidelines
                </a>
              </li>
              <li>
                <a
                  href="https://google.com"
                  className="text-gray-600 hover:text-primary"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="https://google.com"
                  className="text-gray-600 hover:text-primary"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} BiteBuddies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://google.com"
                className="text-gray-500 hover:text-primary text-sm"
              >
                Terms
              </a>
              <a
                href="https://google.com"
                className="text-gray-500 hover:text-primary text-sm"
              >
                Privacy
              </a>
              <a
                href="https://google.com"
                className="text-gray-500 hover:text-primary text-sm"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
