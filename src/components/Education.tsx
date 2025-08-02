import React, { useEffect, useState, useRef } from "react";

const Education: React.FC<{ scrollToSection: (id: string) => void }> = ({ scrollToSection }) => {
  const [showItems, setShowItems] = useState([false, false, false]);
  const containerRef = useRef<HTMLElement | null>(null);
  const animationDone = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting && !animationDone.current) {
            animationDone.current = true;
            showItems.forEach((_, i) => {
              setTimeout(() => {
                setShowItems((prev) => {
                  const newState = [...prev];
                  newState[i] = true;
                  return newState;
                });
              }, i * 700); // delay between fades
            });
          }
        },
        {
          threshold: 0.3, // Trigger when 30% visible (adjust if needed)
        }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
      <section id="education" ref={containerRef} className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

              {/* Current Education */}
              <div
                  className={`relative mb-8 transition-opacity duration-700 ${
                      showItems[0] ? "opacity-100" : "opacity-0"
                  }`}
              >
                <div className="flex items-start">
                  <div className="bg-blue-600 w-4 h-4 rounded-full mt-6 mr-6 flex-shrink-0"></div>
                  <div className="bg-white p-6 rounded-xl shadow-sm flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Internship at Canadian System Technologies
                      </h3>
                      <span className="text-blue-600 font-medium">
                      Summer 2024
                    </span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Second Year
                    </p>
                    <p className="text-gray-600 text-sm">
                      I completed a two-month internship at CST Canadian System Technologies  Enterprise,
                      where I independently developed a fully functional e-commerce website
                      named Chronovia Store. This experience allowed me to apply my technical skills in a real-world setting
                      and gain valuable insights into professional software development.{" "}
                      <span
                          onClick={() => scrollToSection("projects")}
                          className="text-blue-600 underline cursor-pointer hover:text-blue-800"
                      >
    A demo of the project is available in the Projects section.
  </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 w-4 h-4 rounded-full mt-6 mr-6 flex-shrink-0"></div>
                  <div className="bg-white p-6 rounded-xl shadow-sm flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Engineering in Computer Science
                      </h3>
                      <span className="text-blue-600 font-medium">
                      2023 - 2024
                    </span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Second Year
                    </p>
                    <p className="text-gray-600 text-sm">
                      Currently in my second year of computer science engineering,
                      building upon the strong foundation established in my first
                      year. Focusing on advanced programming concepts, software
                      engineering principles, and specialized computer science
                      domains.
                    </p>
                  </div>
                </div>
              </div>

              {/* Preparatory Cycle */}
              <div
                  className={`relative mb-8 transition-opacity duration-700 ${
                      showItems[1] ? "opacity-100" : "opacity-0"
                  }`}
              >
                <div className="flex items-start">
                  <div className="bg-blue-400 w-4 h-4 rounded-full mt-6 mr-6 flex-shrink-0"></div>
                  <div className="bg-white p-6 rounded-xl shadow-sm flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Integrated Preparatory cycle
                      </h3>
                      <span className="text-blue-600 font-medium">
                      2021 - 2023
                    </span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Faculté des Sciences de Bizerte
                    </p>
                    <p className="text-gray-600 text-sm">
                      Completed two years of integrated preparatory cycle at the
                      Faculty of Sciences of Bizerte. This program provided a
                      solid foundation in mathematics, physics, and fundamental
                      sciences, preparing me for engineering studies in computer
                      science.
                    </p>
                  </div>
                </div>
              </div>

              {/* Baccalaureate */}
              <div
                  className={`relative transition-opacity duration-700 ${
                      showItems[2] ? "opacity-100" : "opacity-0"
                  }`}
              >
                <div className="flex items-start">
                  <div className="bg-blue-200 w-4 h-4 rounded-full mt-6 mr-6 flex-shrink-0"></div>
                  <div className="bg-white p-6 rounded-xl shadow-sm flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Baccalaureate in Computer Science
                      </h3>
                      <span className="text-blue-600 font-medium">2021</span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Lycée Khayer Eddine Ariana
                    </p>
                    <p className="text-gray-600 text-sm">
                      Obtained the Tunisian Baccalaureate in Computer Science
                      (Sciences Informatiques), with a focus on programming,
                      algorithms, mathematics, and general sciences. This diploma
                      marked the beginning of my academic journey toward
                      engineering and technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Education;