import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateRecipe from "./pages/CreateRecipe";
import Explore from "./pages/Explore";
import MyRecipes from "./pages/MyRecipes";
import Pricing from "./pages/Pricing";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 w-full pb-12 md:pb-0">
        <Navbar />
        <main className="pt-16 w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<CreateRecipe />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/my-recipes" element={<MyRecipes />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
