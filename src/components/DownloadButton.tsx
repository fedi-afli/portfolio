import React from "react";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  file: string;
  label?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  file,
  label = "Download Resume",
}) => {
  return (
    <a
      href={file}
      download
      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
    >
      <Download className="w-5 h-5 mr-2" />
      {label}
    </a>
  );
};

export default DownloadButton;
