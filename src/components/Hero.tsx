import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Space with Living Beauty
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Interior & Balcony Plant Styling Tailored to You
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn btn-primary">
              Book Free Consultation
            </a>
            <a href="#gallery" className="btn btn-secondary">
              View Gallery
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 