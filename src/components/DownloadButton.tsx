import React from "react";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  file: string;
  label?: string;
  variant?: "primary" | "ghost";
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  file,
  label = "Download Resume",
  variant = "primary",
}) => (
  <a href={file} download className={variant === "primary" ? "btn-primary" : "btn-ghost"}>
    <Download className="h-5 w-5" />
    {label}
  </a>
);

export default DownloadButton;
