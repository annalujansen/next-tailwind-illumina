"use client";

import { motion } from "framer-motion";
import { FileText, ClipboardList, Infinity } from "lucide-react";

export default function PackagesCards() {
  const packages = [
    {
      icon: <FileText className="text-bronze h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />,
      title: "Bronze Package",
      description: [
        "Analysis of up to 3 contracts",
        "Simplified risk report",
        "Basic suggestions for improvement",
      ],
      price: "US$ 1,200",
      delay: 0.3,
    },
    {
      icon: <ClipboardList className="text-gray-400 h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />,
      title: "Silver Package",
      description: [
        "Analysis of up to 7 contracts",
        "Full risk and improvement report",
        "Updated contract templates",
      ],
      price: "US$ 2,500",
      delay: 0.5,
    },
    {
      icon: <Infinity className="text-yellow-600 h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />,
      title: "Gold Package",
      description: [
        "Unlimited contract analysis",
        "Continuous reviews & monthly meetings",
        "Custom template database creation",
      ],
      price: "US$ 4,000",
      delay: 0.7,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {packages.map((pkg, index) => (
        <motion.div
          key={pkg.title}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: pkg.delay }}
          viewport={{ once: true }}
          className="w-[280px] sm:w-[380px] lg:w-[360px] rounded-xl bg-fundo-2/50 p-6 shadow-lg backdrop-blur-sm"
        >
          <div className="mb-4 flex items-center gap-3">
            {pkg.icon}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-color-7">
              {pkg.title}
            </h3>
          </div>
          <ul className="mb-4 list-disc list-inside text-sm sm:text-base text-color-7 space-y-1">
            {pkg.description.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <p className="text-right text-lg font-semibold text-color-1">
            {pkg.price}
          </p>
        </motion.div>
      ))}
    </div>
  );
} 