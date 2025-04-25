"use client"

import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SubscriptionPage() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const subscriptionPlans = [
    {
      id: "free",
      name: "Free",
      description: "Basic features with ads",
      price: {
        monthly: 0,
        yearly: 0,
      },
      features: [
        { name: "Ad-supported listening", included: true },
        { name: "Basic audio quality (128 kbps)", included: true },
        { name: "Skip 6 tracks per hour", included: true },
        { name: "Listen with shuffle only", included: true },
        { name: "Mobile app access", included: true },
        { name: "Ad-free listening", included: false },
        { name: "Offline listening", included: false },
        { name: "High quality audio (320 kbps)", included: false },
        { name: "Unlimited skips", included: false },
      ],
      popular: false,
      buttonText: "Current Plan",
      buttonVariant: "outline" as const,
      disabled: true,
    },
    {
      id: "individual",
      name: "Individual",
      description: "Ad-free music listening",
      price: {
        monthly: 9.99,
        yearly: 99.99,
      },
      features: [
        { name: "Ad-supported listening", included: true },
        { name: "Basic audio quality (128 kbps)", included: true },
        { name: "Skip 6 tracks per hour", included: true },
        { name: "Listen with shuffle only", included: true },
        { name: "Mobile app access", included: true },
        { name: "Ad-free listening", included: true },
        { name: "Offline listening", included: true },
        { name: "High quality audio (320 kbps)", included: true },
        { name: "Unlimited skips", included: true },
      ],
      popular: true,
      buttonText: "Get Started",
      buttonVariant: "default" as const,
      disabled: false,
    },
    {
      id: "family",
      name: "Family",
      description: "For up to 6 family members",
      price: {
        monthly: 14.99,
        yearly: 149.99,
      },
      features: [
        { name: "Ad-supported listening", included: true },
        { name: "Basic audio quality (128 kbps)", included: true },
        { name: "Skip 6 tracks per hour", included: true },
        { name: "Listen with shuffle only", included: true },
        { name: "Mobile app access", included: true },
        { name: "Ad-free listening", included: true },
        { name: "Offline listening", included: true },
        { name: "High quality audio (320 kbps)", included: true },
        { name: "Unlimited skips", included: true },
        { name: "Up to 6 accounts", included: true },
        { name: "Parental controls", included: true },
      ],
      popular: false,
      buttonText: "Get Started",
      buttonVariant: "default" as const,
      disabled: false,
    },
  ]

  const yearlyDiscount = 16.7 // percentage

  return (
    <div className="flex h-screen w-full bg-white text-black overflow-hidden">
      <Sidebar isCollapsed={isCollapsed} toggleCollapsed={() => setIsCollapsed(!isCollapsed)} />

      <div
        className={cn(
          "flex-1 overflow-auto transition-all duration-300 bg-white",
          isCollapsed ? "ml-[64px]" : "ml-[64px] md:ml-[256px]",
        )}
      >
        <main className="p-4 md:p-8 max-w-7xl mx-auto">
          <div className="text-center mb-12 mt-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">Choose Your Plan</h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Select the perfect subscription plan for your music needs. Cancel anytime.
            </p>

            <div className="flex items-center justify-center mt-8 mb-12">
              <div className="bg-gray-100 p-1 rounded-full inline-flex">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-medium transition-all",
                    billingCycle === "monthly" ? "bg-white shadow-sm text-black" : "text-gray-500 hover:text-gray-700",
                  )}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-medium transition-all relative",
                    billingCycle === "yearly" ? "bg-white shadow-sm text-black" : "text-gray-500 hover:text-gray-700",
                  )}
                >
                  Yearly
                  <Badge className="absolute -top-2 -right-2 bg-green-500 text-[10px] px-1.5 py-0.5">
                    Save {yearlyDiscount}%
                  </Badge>
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {subscriptionPlans.map((plan) => (
              <Card
                key={plan.id}
                className={cn("relative border-2", plan.popular ? "border-black" : "border-gray-200")}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-black text-white px-3 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">
                      ${billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className="text-gray-500 ml-1">/{billingCycle === "monthly" ? "month" : "year"}</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-black" : "text-gray-400"}>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant={plan.buttonVariant} className="w-full" disabled={plan.disabled}>
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-12">
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-500 text-sm">
                  We accept all major credit cards, PayPal, and various local payment methods depending on your country.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Can I cancel my subscription anytime?</h3>
                <p className="text-gray-500 text-sm">
                  Yes, you can cancel your subscription at any time. Your benefits will continue until the end of your
                  billing period.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">What happens when I upgrade or downgrade?</h3>
                <p className="text-gray-500 text-sm">
                  When you upgrade, the changes take effect immediately. If you downgrade, the changes will apply at the
                  start of your next billing cycle.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Is there a free trial available?</h3>
                <p className="text-gray-500 text-sm">
                  Yes, new users can enjoy a 30-day free trial of our Premium plan. No credit card required to start.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-xl font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-500 mb-4">
              Our support team is here to help you with any questions about our subscription plans.
            </p>
            <Button variant="outline">Contact Support</Button>
          </div>
        </main>
      </div>
    </div>
  )
}
