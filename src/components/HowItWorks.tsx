import React from 'react';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  ClipboardDocumentListIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    title: 'Book a Visit',
    description: 'Schedule a free consultation with our plant experts to discuss your vision.',
    icon: CalendarIcon,
  },
  {
    title: 'Custom Plan',
    description: 'We create a personalized plant styling plan tailored to your space and preferences.',
    icon: ClipboardDocumentListIcon,
  },
  {
    title: 'Installation',
    description: 'Our team handles the complete installation of your plant arrangements.',
    icon: TruckIcon,
  },
  {
    title: 'Optional Maintenance',
    description: 'Keep your plants thriving with our professional maintenance services.',
    icon: WrenchScrewdriverIcon,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple 4-step process makes it easy to transform your space with beautiful plants.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-nest-100 text-green-nest-600 mb-4">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-green-nest-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 