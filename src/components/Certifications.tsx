import React, { useEffect, useState, useRef } from "react";
import { BadgeCheck } from "lucide-react";

interface Certification {
  title: string;
  year: string;
  badge: string;
  accentText: string;
}

const PLACEHOLDER_BADGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/120px-Placeholder_view_vector.svg.png";

const certifications: Certification[] = [
  {
    title: "Microsoft Word",
    year: "2023",
    badge: PLACEHOLDER_BADGE,
    accentText: "text-blue-600",
  },
  {
    title: "Microsoft Excel",
    year: "2023",
    badge: PLACEHOLDER_BADGE,
    accentText: "text-emerald-600",
  },
  {
    title: "Microsoft PowerPoint",
    year: "2023",
    badge: PLACEHOLDER_BADGE,
    accentText: "text-orange-500",
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications validating my technical expertise.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-12">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className={`flex flex-col items-center transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Badge image */}
              <div className="relative w-36 h-36 mb-5">
                <img
                  src={cert.badge}
                  alt={`${cert.title} badge`}
                  className="w-full h-full object-contain drop-shadow-md"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      PLACEHOLDER_BADGE;
                  }}
                />
                {/* Verified tick overlay */}
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow">
                  <BadgeCheck
                    className={`w-6 h-6 ${cert.accentText}`}
                    strokeWidth={2}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 text-center mb-2">
                {cert.title}
              </h3>

              {/* Certified pill */}
              <span
                className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-gray-100 ${cert.accentText}`}
              >
                Certified · {cert.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
