"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { toast } from 'sonner';
import Loader from './loader';  // Importing the loader component
import { Loader2Icon } from 'lucide-react';

const info = [
    {
        icon: <FaPhoneAlt/>,
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
    const [form, setForm] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        message: "",
        selectService: ""
    });
    const [loading, setLoading] = useState(false);
    const [formStatus, setFormStatus] = useState<string | null>(null); // Track success or error status

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setFormStatus(null); // Reset status before sending

        emailjs.send('service_vk03kie', 'template_7u81n9t', {
            from_name: form.fullName,
            to_name: "Allen Aryee",
            from_email: form.email,
            to_email: "allenniia@gmail.com",
            message: form.message,
            phoneNumber: form.phoneNumber,
            selectService: form.selectService,
        }, 'TWc6M5bt3b7fBo0WR')
            .then(() => {
                setLoading(false);
                setFormStatus("success"); // Set success status after successful send
                setForm({
                    fullName: "",
                    phoneNumber: "",
                    email: "",
                    message: "",
                    selectService: ""
                });
            }, () => {
                setLoading(false);
                setFormStatus("error"); // Set error status if something goes wrong
            });
    };

    // Disable button if required fields are empty
    const isFormValid = form.fullName && form.phoneNumber && form.email && form.message && form.selectService;

    // useEffect for toast notifications based on form submission status
    useEffect(() => {
        if (formStatus === "success") {
            toast.success(`Thank you ${form.fullName}, I will get back to you as soon as possible`);
        } else if (formStatus === "error") {
            toast.error("Failed to send the message, please try again.");
        }
    }, [formStatus, form.fullName]); // Trigger the toast when formStatus changes

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.6, ease: 'easeInOut' } }}
        >
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Contact Info Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {info.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center  p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
                            <div className="text-4xl text-primary mb-4">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Contact Form Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className=" p-8 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-semibold dark:text-white mb-6">Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="fullName" className="block ">Full Name</label>
                                <Input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="phoneNumber" className="block">Phone Number</label>
                                <Input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={form.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block ">Email Address</label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block ">Your Message</label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div className="flex justify-end">
                                <Button
                                    type="submit"
                                    className=" px-6 py-2 rounded-lg shadow-md hover:bg-primary-dark"
                                    disabled={loading || !isFormValid}
                                >
                                    {loading ? <Loader2Icon className="animate-spin"/> : "Send Message"}
                                </Button>
                            </div>
                        </form>
                    </div>

                    <div className=" p-8 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-semibold  mb-6">Select Service</h2>
                        <Select
                            value={form.selectService}
                            onValueChange={(value) => setForm({ ...form, selectService: value })}
                        >
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

            {loading && <Loader />}
        </motion.section>
    );
};

export default Contact;
