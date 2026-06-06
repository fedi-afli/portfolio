import React, { useEffect, useState, useRef } from "react";
import { BadgeCheck } from "lucide-react";

interface Certification {
  title: string;
  year: string;
  badgeBg: string;
  badgeRing: string;
  badgeIcon: string;
  iconLetter: string;
  accentText: string;
}

const certifications: Certification[] = [
  {
    title: "Microsoft Word",
    year: "2023",
    badgeBg: "bg-blue-600",
    badgeRing: "ring-blue-200",
    badgeIcon: "bg-blue-700",
    iconLetter: "W",
    accentText: "text-blue-600",
  },
  {
    title: "Microsoft Excel",
    year: "2023",
    badgeBg: "bg-emerald-600",
    badgeRing: "ring-emerald-200",
    badgeIcon: "bg-emerald-700",
    iconLetter: "X",
    accentText: "text-emerald-600",
  },
  {
    title: "Microsoft PowerPoint",
    year: "2023",
    badgeBg: "bg-orange-500",
    badgeRing: "ring-orange-200",
    badgeIcon: "bg-orange-600",
    iconLetter: "P",
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

        <div className="flex flex-col sm:flex-row justify-center gap-10">
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
              {/* Badge */}
              <div
                className={`relative w-36 h-36 rounded-full ${cert.badgeBg} ring-8 ${cert.badgeRing} flex items-center justify-center shadow-lg mb-5`}
              >
                {/* Decorative notch ring */}
                <div className="absolute inset-0 rounded-full border-4 border-white/30"></div>

                {/* App icon letter */}
                <div
                  className={`w-16 h-16 rounded-2xl ${cert.badgeIcon} flex items-center justify-center shadow-md`}
                >
                  <span className="text-white text-3xl font-black">
                    {cert.iconLetter}
                  </span>
                </div>

                {/* Verified tick */}
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-0.5 shadow">
                  <BadgeCheck
                    className={`w-7 h-7 ${cert.accentText}`}
                    strokeWidth={2}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 text-center mb-1">
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
