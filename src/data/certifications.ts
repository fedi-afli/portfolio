import excel_badge from "/MOS_Excel.png";
import powerpoint_badge from "/MOS_PowerPoint.png";
import word_badge from "/MOS_Word_Expert.png";
import aws_data_engineering from "/AWS_data_engineering.png";

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  badge: string;
}

export interface CertCategory {
  categoryTitle: string;
  certifications: Certification[];
}

export const certificationCategories: CertCategory[] = [
  {
    categoryTitle: "Cloud & Data Engineering",
    certifications: [
      {
        title: "AWS Data Engineering",
        issuer: "Amazon Web Services",
        year: "2026",
        badge: aws_data_engineering,
      },
    ],
  },
  {
    categoryTitle: "Microsoft Office Specialist",
    certifications: [
      { title: "Word Expert", issuer: "Microsoft", year: "2023", badge: word_badge },
      { title: "Excel", issuer: "Microsoft", year: "2023", badge: excel_badge },
      { title: "PowerPoint", issuer: "Microsoft", year: "2023", badge: powerpoint_badge },
    ],
  },
];

export const certificationCount = certificationCategories.reduce(
  (sum, category) => sum + category.certifications.length,
  0
);
