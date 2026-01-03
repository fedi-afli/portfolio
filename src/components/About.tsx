import React from "react";
import { MapPin, Calendar, BookOpen } from "lucide-react";
import ProfileImage from "/profile_image.png";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl  h-90 w-80 flex items-center justify-center">
              <img
                src={ProfileImage}
                alt="Profile Image"
                className="rounded-2xl  h-100 w-90 "
              />
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Hello! I'm Fedi Afli
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At 22 years old, I'm currently in my second year of computer
              science engineering, having completed a solid preparatory cycle at
              the Faculty of Sciences of Bizerte. My journey in technology
              continues to evolve as I deepen my understanding of programming
              and software development.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I'm fascinated by the intersection of problem-solving and
              creativity that programming offers. From algorithms to user
              interfaces, I enjoy exploring different aspects of software
              development and am eager to contribute to innovative projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                Bizerte, Tunisia
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                22 years old
              </div>
              <div className="flex items-center text-gray-600">
                <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                Engineering Student
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
