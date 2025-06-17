import React from 'react';
import { motion } from 'framer-motion';
import {
  HomeIcon,
  SunIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Indoor Plant Styling',
    description: 'Transform your living spaces with carefully curated indoor plants that complement your interior design.',
    icon: HomeIcon,
  },
  {
    title: 'Balcony/Terrace Gardens',
    description: 'Create your own urban oasis with our balcony and terrace garden solutions.',
    icon: SunIcon,
  },
  {
    title: 'Outdoor Landscaping',
    description: 'Professional landscaping services to enhance your outdoor spaces with beautiful plant arrangements.',
    icon: SparklesIcon,
  },
  {
    title: 'Custom Plant Solutions',
    description: 'Tailored plant solutions designed to meet your specific needs and preferences.',
    icon: WrenchScrewdriverIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of plant styling and landscaping services
            designed to bring nature's beauty into your space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="h-12 w-12 text-green-nest-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 