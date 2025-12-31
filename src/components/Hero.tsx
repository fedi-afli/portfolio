import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const fullText = "Hi, I'm Fedi Afli";
  const pauseAfter = "Hi,".length;
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;

    const type = () => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        if (index === pauseAfter) {
          setTimeout(() => {
            index++;
            type();
          }, 600);
        } else {
          setTimeout(() => {
            index++;
            type();
          }, 100);
        }
      } else {
        setTypingDone(true);
      }
    };

    type();
  }, []);

  const getColoredText = () => {
    const nameStart = fullText.indexOf("Fedi Afli");
    const beforeName = typedText.slice(0, nameStart);
    const nameTyped = typedText.slice(nameStart);

    return (
      <>
        {beforeName}
        <span className="text-blue-600">{nameTyped}</span>
      </>
    );
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            {getColoredText()}
          </h1>

          <p
            className={`text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto transition-opacity duration-500 ${
              typingDone ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            Computer Science Engineering Student passionate about building
            innovative solutions and exploring the endless possibilities of
            technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="animate-bounce">
          <ChevronDown
            className="w-8 h-8 text-gray-400 mx-auto cursor-pointer"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
