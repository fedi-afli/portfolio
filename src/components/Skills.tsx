import React from "react";
import { Code, Database, Palette, Globe } from "lucide-react";
import SkillBar from "./SkillBar";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            As a second-year engineering student, I'm continuously learning and
            building my foundation in computer science fundamentals and modern
            technologies.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Code className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Programming
            </h3>
            <div className="space-y-4">
              <SkillBar skill="JavaScript/TypeScript" level={85} />
              <SkillBar skill="Python" level={80} />
              <SkillBar skill="C/C++" level={60} />
              <SkillBar skill="Java" level={80} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Globe className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Web Development
            </h3>
            <div className="space-y-4">
              <SkillBar skill="HTML/CSS" level={85} />
              <SkillBar skill="React" level={80} />
              <SkillBar skill="Node.js" level={80} />
              <SkillBar skill="Tailwind CSS" level={70} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Database className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Data & Algorithms
            </h3>
            <div className="space-y-4">
              <SkillBar skill="Data Structures" level={90} />
              <SkillBar skill="Algorithms" level={85} />
              <SkillBar skill="SQL" level={90} />
              <SkillBar skill="Mathematics" level={80} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Palette className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Tools & Others
            </h3>
            <div className="space-y-4">
              <SkillBar skill="Git/GitHub" level={80} />
              <SkillBar skill="Linux" level={65} />
              <SkillBar skill="VS Code" level={85} />
              <SkillBar skill="Problem Solving" level={85} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
