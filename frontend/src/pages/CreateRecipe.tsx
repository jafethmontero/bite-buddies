import { useState } from "react";
import {
  Plus,
  Minus,
  Sparkles,
  Clock,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import Button from "../components/Button";

interface Ingredient {
  id: string;
  name: string;
  amount: string;
  unit: string;
}

interface Step {
  id: string;
  description: string;
}

export default function CreateRecipe() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [servings, setServings] = useState("");
  const [difficulty, setDifficulty] = useState("medium");
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: "1", name: "", amount: "", unit: "g" },
  ]);
  const [steps, setSteps] = useState<Step[]>([{ id: "1", description: "" }]);
  const [aiSuggestion, setAiSuggestion] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      { id: Date.now().toString(), name: "", amount: "", unit: "g" },
    ]);
  };

  const removeIngredient = (id: string) => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter((ing) => ing.id !== id));
    }
  };

  const updateIngredient = (
    id: string,
    field: keyof Ingredient,
    value: string
  ) => {
    setIngredients(
      ingredients.map((ing) =>
        ing.id === id ? { ...ing, [field]: value } : ing
      )
    );
  };

  const addStep = () => {
    setSteps([...steps, { id: Date.now().toString(), description: "" }]);
  };

  const removeStep = (id: string) => {
    if (steps.length > 1) {
      setSteps(steps.filter((step) => step.id !== id));
    }
  };

  const updateStep = (id: string, description: string) => {
    setSteps(
      steps.map((step) => (step.id === id ? { ...step, description } : step))
    );
  };

  const getAISuggestions = async () => {
    setIsGenerating(true);
    // TODO: Implement AI suggestions
    setTimeout(() => {
      setAiSuggestion(
        "Try adding a pinch of smoked paprika to enhance the flavor profile. Consider marinating the ingredients for 30 minutes before cooking to develop deeper flavors."
      );
      setIsGenerating(false);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement recipe submission
    console.log({
      title,
      description,
      cookingTime,
      servings,
      difficulty,
      ingredients,
      steps,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Create Recipe</h1>
        <Button
          onClick={getAISuggestions}
          disabled={isGenerating}
          type="button"
        >
          <Sparkles className="h-5 w-5 mr-2" />
          Get AI Suggestions
        </Button>
      </div>

      {aiSuggestion && (
        <div className="mb-8 p-4 bg-primary border border-primary rounded-lg">
          <div className="flex items-start">
            <Sparkles className="h-5 w-5 text-primary mt-1 mr-3" />
            <div>
              <h3 className="font-semibold text-primary mb-1">AI Suggestion</h3>
              <p className="text-primary">{aiSuggestion}</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Recipe Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label
                  htmlFor="cookingTime"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <Clock className="h-4 w-4 inline mr-1" />
                  Cooking Time (minutes)
                </label>
                <input
                  type="number"
                  id="cookingTime"
                  value={cookingTime}
                  onChange={(e) => setCookingTime(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="servings"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <Users className="h-4 w-4 inline mr-1" />
                  Servings
                </label>
                <input
                  type="number"
                  id="servings"
                  value={servings}
                  onChange={(e) => setServings(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="difficulty"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <UtensilsCrossed className="h-4 w-4 inline mr-1" />
                  Difficulty
                </label>
                <select
                  id="difficulty"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  required
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Ingredients</h2>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addIngredient}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Ingredient
            </Button>
          </div>
          <div className="space-y-4">
            {ingredients.map((ingredient) => (
              <div key={ingredient.id} className="flex items-center gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    value={ingredient.name}
                    onChange={(e) =>
                      updateIngredient(ingredient.id, "name", e.target.value)
                    }
                    placeholder="Ingredient name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
                <div className="w-24">
                  <input
                    type="text"
                    value={ingredient.amount}
                    onChange={(e) =>
                      updateIngredient(ingredient.id, "amount", e.target.value)
                    }
                    placeholder="Amount"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
                <div className="w-24">
                  <select
                    value={ingredient.unit}
                    onChange={(e) =>
                      updateIngredient(ingredient.id, "unit", e.target.value)
                    }
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    title="Unit"
                  >
                    <option value="g">g</option>
                    <option value="kg">kg</option>
                    <option value="ml">ml</option>
                    <option value="l">l</option>
                    <option value="tsp">tsp</option>
                    <option value="tbsp">tbsp</option>
                    <option value="cup">cup</option>
                    <option value="piece">piece</option>
                  </select>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => removeIngredient(ingredient.id)}
                  className="text-red-600 hover:text-red-700"
                  disabled={ingredients.length === 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Instructions</h2>
            <Button type="button" variant="outline" size="sm" onClick={addStep}>
              <Plus className="h-4 w-4 mr-1" />
              Add Step
            </Button>
          </div>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-start gap-4">
                <div className="flex-none pt-2">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary font-medium text-sm">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <textarea
                    value={step.description}
                    onChange={(e) => updateStep(step.id, e.target.value)}
                    placeholder="Describe this step"
                    rows={2}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => removeStep(step.id)}
                  className="text-red-600 hover:text-red-700"
                  disabled={steps.length === 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline">
            Save as Draft
          </Button>
          <Button type="submit">Publish Recipe</Button>
        </div>
      </form>
    </div>
  );
}
