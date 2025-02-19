"use client";

import React from 'react';
import CountUp from "react-countup";

const currentYear = new Date().getFullYear();
const startYear = 2021;
const yearsOfExperience = currentYear - startYear;

// Stats data
const stats = [
  {
    num: yearsOfExperience,
    text: "Years of Experience"
  },
  {
    num: 8,
    text: "Technologies Expertise"
  },
  {
    num: 11,
    text: "Projects Completed"
  },
];

// Stats Component
const Stats = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center transition-shadow duration-300 ease-in-out">
              <CountUp 
                start={0} 
                end={stat.num} 
                duration={5} 
                delay={2}
                suffix={stat.num === yearsOfExperience ? "+" : ""}  // Add the + here if it's the yearsOfExperience stat
                className="text-4xl font-semibold text-blue-500"
              />
              <p className="text-lg font-medium mt-2 text-gray-700">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
