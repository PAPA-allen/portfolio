import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from 'next/link';

const socials = [
    { icon: <FaGithub />, path: "https://github.com", color: "bg-black", borderColor: "border-gray-700" },
    { icon: <FaLinkedinIn />, path: "https://linkedin.com", color: "bg-blue-700", borderColor: "border-blue-600" },
    { icon: <FaTwitter />, path: "https://twitter.com", color: "bg-blue-400", borderColor: "border-blue-300" },
];

const Socials = () => {
  return (
    <div className="flex justify-center gap-6 p-4">
      {socials.map((social, index) => (
        <Link 
          key={index} 
          href={social.path} 
          passHref 
          className={`flex justify-center items-center w-12 h-12 rounded-full border-2 ${social.color} ${social.borderColor} text-white transition-transform transform hover:scale-110`}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}

export default Socials;
