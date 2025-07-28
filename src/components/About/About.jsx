import React from 'react';
import { FaHotel, FaSearch, FaCheckCircle, FaUserShield, FaTools, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-gray-800">
        {/* Header */}
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4 text-center">
          About <span className="text-gray-900">Us</span>
        </h1>
        <p className="text-center text-lg max-w-2xl mx-auto text-gray-600 mb-12">
          Building the bridge between comfort and technology — one hotel at a time. 💙
        </p>

        {/* Intro */}
        <div className="bg-white shadow-xl rounded-3xl p-8 mb-10">
          <p className="mb-4 text-lg leading-relaxed">
            <strong className="text-blue-600">StayMaster</strong> is your intelligent, all-in-one hotel management web app designed to
            simplify hotel discovery, availability tracking, and booking simulations — all in one seamless platform.
            Built with ❤️ by <strong>Bhawana</strong>, a first-year BTech student at Newton School of Technology.
          </p>
          <p className="text-lg leading-relaxed">
            Developed as part of a capstone project, our goal is to create an intuitive and efficient experience for both
            hotel owners and guests — streamlining the interaction between hospitality and technology.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <FeatureCard
            icon={<FaSearch className="text-3xl text-blue-600" />}
            title="Hotel Search"
            description="Effortlessly browse hotels based on preferences, location, and travel dates."
          />
          <FeatureCard
            icon={<FaCheckCircle className="text-3xl text-green-600" />}
            title="Real-Time Availability"
            description="Instant room availability updates — no confusion or wait."
          />
          <FeatureCard
            icon={<FaHotel className="text-3xl text-purple-600" />}
            title="Simulated Bookings"
            description="Experience a real-world booking simulation workflow."
          />
          <FeatureCard
            icon={<FaUserShield className="text-3xl text-yellow-600" />}
            title="Admin Panel"
            description="Hotel managers can add, update, and manage properties and bookings."
          />
        </div>

        {/* Tech Stack */}
        <div className="bg-white shadow-xl rounded-3xl p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaTools className="text-blue-600" /> Tech Stack
          </h2>
          <p className="text-lg text-gray-700">
            React, JSX, Tailwind CSS, and Firebase for backend services and authentication.
          </p>
        </div>

        {/* Connect */}
        <div className="bg-blue-100 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">🤝 Let’s connect!</h2>
          <p className="text-lg text-gray-800 mb-4">
            Always happy to collaborate, learn, or receive feedback.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 text-lg">
            <a
              href="https://linkedin.com/in/bhawana-968271323"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline text-blue-700"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="mailto:bhawanayadav0907@gmail.com"
              className="flex items-center gap-2 hover:underline text-blue-700"
            >
              <MdEmail /> bhawanayadav0907@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
    <div className="flex items-center gap-4 mb-3">
      {icon}
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default About;
