import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import DownloadButton from "./DownloadButton";
import Resume from "/Resume-Fedi-Afli.pdf";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a conversation about technology.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Let's Connect
            </h3>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Mail className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <div className="font-medium text-gray-800">Email</div>
                  <div className="text-gray-600">f3diafli@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Phone className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <div className="font-medium text-gray-800">Phone</div>
                  <div className="text-gray-600">+216 29 337 633</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <div className="font-medium text-gray-800">Location</div>
                  <div className="text-gray-600">Bizerte, Tunisia</div>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 pt-4">
              <div className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/fedi-afli-2741972ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View LinkedIn profile"
                >
                  <Linkedin className="w-6 h-6 text-white hover:text-blue-300 transition-colors" />
                </a>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg hover:bg-gray-900 transition-colors cursor-pointer">
                <a
                  href="https://github.com/fedi-afli"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GitHub profile"
                >
                  <Github className="w-6 h-6 text-white hover:text-gray-300 transition-colors" />
                </a>
              </div>
              <div className="bg-blue-500 p-3 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                <a href="mailto:f3diafli@gmail.com" aria-label="Send email">
                  <Mail className="w-6 h-6 text-white hover:text-blue-300 transition-colors" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Ready to collaborate?
            </h4>
            <p className="text-gray-600 mb-6">
              Whether you're looking for a passionate student for an internship,
              want to collaborate on a project, or just want to connect with
              someone who loves technology, I'd love to hear from you!
            </p>
            <DownloadButton file={Resume} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
