import React, { useState, useEffect, useRef } from "react";

interface SkillBarProps {
  skill: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset and trigger animation
          setWidth(0);
          setTimeout(() => setWidth(level), 100);
        } else {
          setWidth(0); // Reset if out of view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [level]);

  return (
    <div className="mb-4" ref={ref}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium">{skill}</span>
        <span className="text-gray-500 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
        <div
          className="h-3 rounded-full bg-blue-600 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
