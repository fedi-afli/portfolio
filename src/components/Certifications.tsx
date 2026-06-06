import React, { useEffect, useState, useRef } from "react";
import { Award, CheckCircle } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  color: string;
  iconColor: string;
}

const certifications: Certification[] = [
  {
    title: "Microsoft Word",
    issuer: "Microsoft Office Specialist",
    date: "2023",
    description:
      "Proficiency in document creation, formatting, styles, mail merge, and advanced word processing features.",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    title: "Microsoft Excel",
    issuer: "Microsoft Office Specialist",
    date: "2023",
    description:
      "Expertise in spreadsheet management, formulas, pivot tables, data analysis, and visualization with charts.",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
  },
  {
    title: "Microsoft PowerPoint",
    issuer: "Microsoft Office Specialist",
    date: "2023",
    description:
      "Skilled in creating professional presentations, animations, slide design, and effective visual storytelling.",
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-500",
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
            Professional certifications that validate my technical skills and
            commitment to continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className={`border rounded-2xl p-6 ${cert.color} transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm`}
                >
                  <Award className={`w-6 h-6 ${cert.iconColor}`} />
                </div>
                <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm">
                  {cert.date}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {cert.title}
              </h3>
              <p className={`text-sm font-semibold mb-3 ${cert.iconColor}`}>
                {cert.issuer}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="flex items-center text-sm text-gray-500">
                <CheckCircle className={`w-4 h-4 mr-2 ${cert.iconColor}`} />
                Certified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
