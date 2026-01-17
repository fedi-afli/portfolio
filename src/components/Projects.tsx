import React from "react";
import social_sphere_logo from "/social_sphere_logo.png";
import chronova_logo from "/chronova_logo.png";
import {
  Code,
  Database,
  Globe,
  ExternalLink,
  Users,
  ShoppingCart,
} from "lucide-react";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some projects I've worked on during my studies and personal
            learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/*Chronovia Store Project*/}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 w-full h-48 rounded-lg mb-6 flex items-center justify-center">
              <img
                src={chronova_logo}
                alt="Chronova Logo"
                className="h-32 w-32 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Chronova Store eCommerce
            </h3>
            <p className="text-gray-600 mb-4">
              A full-featured e-commerce web application built during my
              internship at CTB Enterprise. Includes product browsing,
              authentication, cart, orders, and admin dashboard.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2 flex-wrap gap-1 gap-y-* ">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                  Spring Boot
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
                  TypeScript
                </span>
                <span className="px-3 py-1  bg-blue-100 text-blue-800 text-sm rounded-full">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">
                  Tailwind
                </span>
              </div>
              <a
                href="https://www.youtube.com/watch?v=QnccwiNDIJw&feature=youtu.be"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
              </a>
            </div>
          </div>

          {/* YH Street website */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 w-full h-48 rounded-lg mb-6 flex items-center justify-center">
              <ShoppingCart className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              YH Street eCommerce Website
            </h3>
            <p className="text-gray-600 mb-4">
              A simple yet effective e-commerce website built with React.js and
              Tailwind CSS, designed to showcase products and support online
              shopping for small to medium businesses. It uses Supabase for data
              persistence and is currently live with me managing the platform as
              the administrator.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">
                  Tailwind
                </span>
              </div>
              <a
                href="https://arabian-shop-magichosted.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
              </a>
            </div>
          </div>
          {/* YH Street website */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 w-full h-48 rounded-lg mb-6 flex items-center justify-center">
              <img
                src={social_sphere_logo}
                alt="Social Sphere Logo"
                className="h-32 w-32 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              SocialSphere
            </h3>
            <p className="text-gray-600 mb-4">
              Social Sphere is a LinkedIn-inspired platform that connects
              professionals, enabling networking, content sharing, and career
              growth in a modern social environment.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                  express js
                </span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">
                  Tailwind
                </span>
              </div>
              <a
                href="https://www.youtube.com/watch?v=qts42JCuHFg"
                target="SocialSphere Demo Video"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
              </a>
            </div>
          </div>
          {/* Social Media App in Java */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-full h-48 rounded-lg mb-6 flex items-center justify-center">
              <Users className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Social Media Web App
            </h3>
            <p className="text-gray-600 mb-4">
              A full-stack social media web application built with Java (Maven),
              featuring authentication, user profiles, and real-time posting.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                  Java
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                  SceneBuiler
                </span>
              </div>
              <a
                href="https://github.com/fedi-afli/SocialMedia_LinkedIn.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Python Library Manager */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="bg-green-100 w-full h-48 rounded-lg mb-6 flex items-center justify-center">
              <Database className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Library Management App
            </h3>
            <p className="text-gray-600 mb-4">
              A Python application with a graphical user interface to manage a
              library: books, borrowers, and due dates.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  Python
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">
                  Tkinter
                </span>
              </div>

              {/* <ExternalLink className="w-5 h-5 text-gray-400 hover:text-red-600 cursor-pointer" />*/}
            </div>
          </div>

          {/* ReactJS Portfolio */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 w-full h-48 rounded-lg mb-6 flex items-center justify-center">
              <Globe className="w-12 h-12 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              React Portfolio
            </h3>
            <p className="text-gray-600 mb-4">
              This very portfolio website built with ReactJS and Tailwind CSS to
              showcase my academic and personal projects.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">
                  Tailwind
                </span>
              </div>
              <a
                href="https://fedi-afli.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
              </a>
            </div>
          </div>

          {/* C Process Scheduling Simulator */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="bg-red-100 w-full h-48 rounded-lg mb-6 flex items-center justify-center">
              <Code className="w-12 h-12 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              CPU Scheduling Simulator
            </h3>
            <p className="text-gray-600 mb-4">
              A C application to simulate and visualize CPU process scheduling
              algorithms like FCFS, SJF, Round Robin.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                  C
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                  Algorithms
                </span>
              </div>
              {/* <ExternalLink className="w-5 h-5 text-gray-400 hover:text-red-600 cursor-pointer" />*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
