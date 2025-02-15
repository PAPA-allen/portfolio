"use client";
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Web Development",
    description: "I specialize in building responsive, scalable, and high-performing websites using modern web technologies such as React, Next.js, and Node.js.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description: "With expertise in React Native, I create cross-platform mobile applications that are intuitive, feature-rich, and user-friendly.",
    icon: "📱",
  },
  {
    title: "API Development",
    description: "I build robust and secure RESTful APIs that integrate seamlessly with various applications, ensuring smooth data communication between front-end and back-end.",
    icon: "🔗",
  },
  {
    title: "E-Commerce Solutions",
    description: "I provide end-to-end e-commerce solutions, from developing online stores to integrating payment systems, ensuring a smooth shopping experience for your users.",
    icon: "🛒",
  },
  {
    title: "UI/UX Design",
    description: "I design modern, intuitive user interfaces and experiences that are visually appealing and ensure seamless interaction for your users.",
    icon: "🎨",
  },
  {
    title: "Performance Optimization",
    description: "I optimize websites and apps to ensure fast load times, high performance, and great user experiences, using techniques like code splitting and lazy loading.",
    icon: "⚡",
  },
];

const Services = () => {
  return (
    <section className="py-20">
    <div className="mx-auto px-6">
      <motion.h2
        className="text-4xl font-semibold text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.3, duration: 0.8, ease: "easeIn" }
        }}
      >
        Services I Offer
      </motion.h2>
  
      {/* Service cards with motion effect */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.3, duration: 0.8, ease: "easeIn" }
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-200"
            initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition:{delay:2.3, duration:0.8, ease:"easeIn"}
         }}
          >
            <div className="text-4xl mb-4 text-blue-500">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
  
  );
};

export default Services;
