import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { CreditCard, Lock, Shield, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

interface PlanDetails {
  name: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
}

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Get plan details from location state or redirect to pricing
  const plan = location.state?.plan as PlanDetails;
  
  useEffect(() => {
    if (!plan) {
      navigate('/pricing');
    }
  }, [plan, navigate]);

  if (!plan) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      // TODO: Call your backend to create a Stripe Checkout Session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planName: plan.name,
          interval: plan.interval,
        }),
      });

      const session = await response.json();

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/pricing')}
          className="flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to pricing
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <div>
                  <h3 className="font-medium text-gray-900">{plan.name} Plan</h3>
                  <p className="text-sm text-gray-500">Billed {plan.interval}ly</p>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  ${plan.price}/{plan.interval === 'month' ? 'mo' : 'yr'}
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-medium text-gray-900 mb-2">What's included:</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm text-gray-600">
                      <Shield className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Payment Method</h2>
              <div className="flex items-center text-sm text-gray-500">
                <Lock className="h-4 w-4 mr-1" />
                Secure checkout
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-3 rounded-md bg-red-50 text-red-700 text-sm">
                  {error}
                </div>
              )}

              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-white text-sm text-gray-500">
                    Secure payment with Stripe
                  </span>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                <CreditCard className="h-4 w-4 mr-2" />
                {loading ? 'Processing...' : 'Proceed to Payment'}
              </Button>

              <p className="text-xs text-center text-gray-500">
                By proceeding, you agree to our Terms of Service and acknowledge our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}