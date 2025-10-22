import { Card } from "@/components/ui/card";
import { Check, CreditCard, Users, Globe } from "lucide-react";

const features = [
  {
    title: "Centralized learning",
    description: "All you need to learn the skill of small talk in one place.",
    children: () => {},
  },
  {
    title: "Find valuable insides",
    description:
      "Thanks to our AI powered method of learning, you will find valuable insides.",
    children: () => {},
  },
  {
    title: "Speed of learning",
    description:
      "By just focusing on small talk, you will learn the skill of small talk in a short time.",
    children: () => {},
  },
];

export function FeaturesSection() {
  return (
    <section className="mx-auto px-4 py-20" id="features">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="border-zinc-500/10 bg-zinc-900/50 p-8 backdrop-blur-sm"
          >
            {/* <feature.icon className="mb-4 h-8 w-8 text-white" /> */}
            <h3 className="mb-3 text-3xl tracking-tight text-white">
              {feature.title}
            </h3>
            <p className="mb-6 text-zinc-500">{feature.description}</p>
            {/* {feature.items.length > 0 && (
              <ul className="space-y-2">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            )} */}
            {/* {index === 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                  <CreditCard className="h-3 w-3" />
                  <span>Subscriptions</span>
                </div>
              </div>
            )} */}
            {/* {index === 1 && (
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500" />
                  <div className="text-sm">
                    <div className="font-medium">Tax Report 2025</div>
                    <div className="text-green-500">Submitted</div>
                  </div>
                  <div className="ml-auto text-sm text-gray-400">$2,150.00</div>
                </div>
              </div>
            )} */}
          </Card>
        ))}
      </div>
    </section>
  );
}
