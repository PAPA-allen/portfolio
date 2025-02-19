"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CardContainer, CardBody, CardItem } from "./3d-card"; // Import your 3D card components
import Link from 'next/link';

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
    <section className="py-10">
      <div className="mx-auto px-6 max-w-screen-xl">
        <motion.h2
          className="text-4xl font-semibold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.8, ease: "easeInOut" }
          }}
        >
          Services I Offer
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.8, ease: "easeInOut" }
          }}
        >
          {services.map((service, index) => (
            <CardContainer key={index} className="group/card">
              <div
                className="shadow-lg rounded-xl p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-300 border border-gray-200"
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                  height: "400px",
                  width: "320px",
                }}
              >
                <CardItem
                  translateZ="50"
                  className="flex justify-center items-center text-5xl mb-6" 
                >
                  {service.icon}
                </CardItem>

                <CardItem
                  translateZ="60"
                  className="text-center font-bold text-4xl mb-6 flex justify-center"
                >
                  {service.title}
                </CardItem>

                <CardItem
                  translateZ="100"
                  className="w-full mt-4 text-sm text-gray-500"
                >
                  <p>{service.description}</p>
                </CardItem>
              </div>
            </CardContainer>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
