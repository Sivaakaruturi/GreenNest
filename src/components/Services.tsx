import { motion } from 'framer-motion';
import type { ComponentType, SVGProps } from 'react';
import {
  HomeIcon,
  BuildingOfficeIcon,
  SunIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

type Service = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const services: Service[] = [
  {
    title: 'Indoor Plant Styling',
    description: 'Transform your indoor spaces with carefully selected plants that complement your decor and improve air quality.',
    icon: HomeIcon
  },
  {
    title: 'Balcony/Terrace Gardens',
    description: 'Create your own urban oasis with our balcony and terrace garden design services.',
    icon: BuildingOfficeIcon
  },
  {
    title: 'Outdoor Landscaping',
    description: 'Professional landscaping services to enhance your outdoor spaces with beautiful plants and design elements.',
    icon: SunIcon
  },
  {
    title: 'Custom Plant Solutions',
    description: 'Tailored plant solutions for your specific needs, whether it's a corporate space or residential area.',
    icon: WrenchScrewdriverIcon
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
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
            We offer a comprehensive range of plant styling and design services to transform your spaces.
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
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-green-nest-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <service.icon className="h-6 w-6 text-green-nest-600" />
              </div>
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