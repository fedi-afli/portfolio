import React, { useEffect, useState, useRef } from "react";
import { BadgeCheck } from "lucide-react";
import excel_badge from "/MOS_Excel.png";
import powerpoint_badge from "/MOS_PowerPoint.png";
import word_badge from "/MOS_Word_Expert.png";
import aws_data_engineering from "/AWS_data_engineering.png";

interface Certification {
  title: string;
  year: string;
  badge: string;
  accentText: string;
}

interface CertCategory {
  categoryTitle: string;
  certifications: Certification[];
}

const PLACEHOLDER_BADGE =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/120px-Placeholder_view_vector.svg.png";

const certificationCategories: CertCategory[] = [
  {
    categoryTitle: "Microsoft Office Specialist",
    certifications: [
      {
        title: "Word Expert",
        year: "2023",
        badge: word_badge,
        accentText: "text-blue-600",
      },
      {
        title: "Excel",
        year: "2023",
        badge: excel_badge,
        accentText: "text-emerald-600",
      },
      {
        title: "PowerPoint",
        year: "2023",
        badge: powerpoint_badge,
        accentText: "text-orange-500",
      },
    ],
  },
  {
    categoryTitle: "Cloud & Data Engineering",
    certifications: [
      {
        title: "AWS Data Engineering",
        year: "2026",
        badge: aws_data_engineering,
        accentText: "text-blue-600",
      },
    ],
  },
];

const Certifications: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(true);
        },
        { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
      <section id="certifications" ref={sectionRef} className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Certifications
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
          </div>

          {/* Categories Grid - Horizontally spans on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            {certificationCategories.map((category, catIndex) => (
                <div
                    key={category.categoryTitle}
                    className={`flex flex-col items-center bg-gray-50/70 border border-gray-100 rounded-3xl p-6 sm:p-8 transition-all duration-700 ${
                        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${catIndex * 150}ms` }}
                >

                  {/* Category Header */}
                  <h3 className="text-xl font-bold text-gray-700 mb-8 border-b-2 border-gray-200 pb-2 px-4 text-center w-full max-w-[80%]">
                    {category.categoryTitle}
                  </h3>

                  {/* Badges Horizontal Row for this Category */}
                  <div className="flex flex-row justify-center items-start gap-4 sm:gap-6 flex-wrap w-full">
                    {category.certifications.map((cert, i) => (
                        <div
                            key={cert.title}
                            className="flex flex-col items-center w-24 sm:w-28"
                        >
                          {/* Compact Badge Container */}
                          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4 transition-transform hover:scale-105 duration-300">

                            {/* Circular Wrapper - Reduced padding (p-4) */}
                            <div className="w-full h-full bg-white rounded-full ring-2 ring-gray-200 shadow-md flex items-center justify-center p-4">
                              <img
                                  src={cert.badge}
                                  alt={`${cert.title} badge`}
                                  className="w-full h-full object-contain"
                                  onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).src =
                                        PLACEHOLDER_BADGE;
                                  }}
                              />
                            </div>

                            {/* Verified tick overlay - scaled down */}
                            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-gray-50">
                              <BadgeCheck
                                  className={`w-5 h-5 ${cert.accentText}`}
                                  strokeWidth={2.5}
                              />
                            </div>
                          </div>

                          {/* Title - Smaller text and fixed height to keep rows even */}
                          <h4 className="text-sm font-semibold text-gray-800 text-center leading-tight mb-2 h-8 flex items-center justify-center">
                            {cert.title}
                          </h4>

                          {/* Certified pill - smaller font */}
                          <span
                              className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-200/50 ${cert.accentText}`}
                          >
                      {cert.year}
                    </span>
                        </div>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Certifications;