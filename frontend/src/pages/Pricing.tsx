import { useState, JSX } from "react";
import {
  Check,
  Sparkles,
  Zap,
  Crown,
  ChefHat,
  Star,
  Infinity as InfinityIcon,
} from "lucide-react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

interface PricingTier {
  name: string;
  description: string;
  price: {
    monthly: number;
    annual: number;
  };
  features: string[];
  icon: JSX.Element;
  aiTokens: number;
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    description: "Perfect for getting started with recipe creation",
    price: {
      monthly: 0,
      annual: 0,
    },
    features: [
      "Create and share recipes",
      "Basic recipe organization",
      "Community features",
      "5 AI recipe suggestions per month",
      "Save up to 50 recipes",
    ],
    icon: <ChefHat className="h-6 w-6" />,
    aiTokens: 5,
  },
  {
    name: "Pro",
    description: "Enhanced features for serious home chefs",
    price: {
      monthly: 9.99,
      annual: 99,
    },
    features: [
      "Everything in Free",
      "Advanced recipe organization",
      "Recipe scaling & conversion",
      "50 AI recipe suggestions per month",
      "Save unlimited recipes",
      "Nutritional analysis",
      "Export recipes to PDF",
    ],
    icon: <Star className="h-6 w-6" />,
    aiTokens: 50,
    popular: true,
  },
  {
    name: "Chef",
    description: "Ultimate features for culinary professionals",
    price: {
      monthly: 19.99,
      annual: 199,
    },
    features: [
      "Everything in Pro",
      "Professional recipe templates",
      "Unlimited AI recipe suggestions",
      "Priority support",
      "Custom branding",
      "Team collaboration",
      "API access",
    ],
    icon: <Crown className="h-6 w-6" />,
    aiTokens: -1, // Unlimited
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const navigate = useNavigate();

  const handleSubscribe = (tier: PricingTier) => {
    if (tier.price.monthly === 0) {
      navigate("/register");
    } else {
      navigate("/checkout", {
        state: {
          plan: {
            name: tier.name,
            price: annual ? tier.price.annual : tier.price.monthly,
            interval: annual ? "year" : "month",
            features: tier.features,
          },
        },
      });
    }
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-emerald-600">
            Pricing
          </h1>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the perfect plan for your culinary journey
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative flex rounded-full bg-gray-100 p-1">
            <button
              type="button"
              className={`${
                !annual ? "bg-white shadow-sm" : "hover:bg-gray-50"
              } relative rounded-full py-2 px-4 text-sm font-semibold text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`${
                annual ? "bg-white shadow-sm" : "hover:bg-gray-50"
              } relative ml-0.5 rounded-full py-2 px-4 text-sm font-semibold text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500`}
              onClick={() => setAnnual(true)}
            >
              Annual
              <span className="absolute -top-2 -right-10 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-600">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-8 ring-1 ${
                tier.popular
                  ? "bg-gray-900 ring-gray-900"
                  : "ring-gray-200 bg-white"
              }`}
            >
              <h3
                className={`text-lg font-semibold leading-8 ${
                  tier.popular ? "text-white" : "text-gray-900"
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`mt-4 text-sm leading-6 ${
                  tier.popular ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {tier.description}
              </p>
              <div
                className={`mt-6 flex items-baseline gap-x-1 ${
                  tier.popular ? "text-white" : "text-gray-900"
                }`}
              >
                <span className="text-4xl font-bold tracking-tight">
                  ${annual ? tier.price.annual : tier.price.monthly}
                </span>
                {tier.price.monthly > 0 && (
                  <span className="text-sm font-semibold leading-6">
                    /{annual ? "year" : "month"}
                  </span>
                )}
              </div>
              <div className="mt-6">
                <Button
                  variant={tier.popular ? "primary" : "outline"}
                  className={`w-full ${
                    tier.popular
                      ? "!bg-white !text-gray-900 hover:!bg-gray-50"
                      : ""
                  }`}
                  onClick={() => handleSubscribe(tier)}
                >
                  {tier.price.monthly === 0 ? "Get started" : "Subscribe"}
                </Button>
              </div>
              <ul
                className={`mt-8 space-y-3 text-sm leading-6 ${
                  tier.popular ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <li className="flex gap-x-3 items-center">
                  <Sparkles
                    className={`h-5 w-5 ${
                      tier.popular ? "text-white" : "text-emerald-600"
                    }`}
                  />
                  <span className="flex items-center gap-1">
                    {tier.aiTokens === -1 ? (
                      <>
                        <InfinityIcon className="h-4 w-4" /> Unlimited
                      </>
                    ) : (
                      tier.aiTokens
                    )}{" "}
                    AI suggestions
                  </span>
                </li>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className={`h-6 w-5 flex-none ${
                        tier.popular ? "text-white" : "text-emerald-600"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 mx-auto max-w-2xl text-center">
          <div className="rounded-3xl bg-gray-900/5 p-8">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center justify-center gap-2">
              <Zap className="h-5 w-5 text-emerald-600" />
              Enterprise Solutions
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Need a custom solution for your restaurant or food business? We
              offer tailored enterprise plans with advanced features and
              dedicated support.
            </p>
            <Button variant="outline" className="mt-6">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
