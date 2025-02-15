"use client";
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+000) 000 000 000',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'youremail@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Street Rd.',
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.6, ease: 'easeInOut' } }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Contact Info Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {info.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
              <div className="text-4xl text-primary mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h2>
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Full Name</label>
                <Input type="text" id="name" className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
                <Input type="tel" id="phone" className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email Address</label>
                <Input type="email" id="email" className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Your Message</label>
                <Textarea id="message" rows={4} className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></Textarea>
              </div>

              <div className="flex justify-end">
                <Button className="bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-primary-dark">Send Message</Button>
              </div>
            </form>
          </div>

          {/* Select Topic (Updated to Select Service) */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Select Service</h2>
            <Select>
              <SelectTrigger className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Services</SelectLabel>
                  <SelectItem value="uiux">UI/UX Design</SelectItem>
                  <SelectItem value="fullstack">Fullstack Development</SelectItem>
                  <SelectItem value="mobile">Mobile Development</SelectItem>
                  <SelectItem value="web">Web Development</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
