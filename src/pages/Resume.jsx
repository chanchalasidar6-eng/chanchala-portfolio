import React from "react";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import "../styles/Resume.css";

const Resume = () => {
  const pdfUrl = "/Chanchala-Sidar-Resume.pdf";

  // Force PDF download via Blob to ensure browser downloads the file
  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Chanchala-Sidar-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      // Fallback direct link
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Chanchala-Sidar-Resume.pdf";
      link.target = "_blank";
      link.click();
    }
  };

  return (
    <section className="resume" id="resume">
      <div className="resume-container">

        {/* Heading */}
        <div className="resume-heading">
          <div className="resume-heading-content">
            <p className="resume-subtitle">My Resume</p>
            <h1>Resume</h1>
            <p className="resume-description">
              View my resume or download a copy for more details about my
              skills, projects, education, and experience.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="resume-actions">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-view-btn"
            >
              <FiExternalLink />
              Open PDF
            </a>

            <button
              onClick={handleDownload}
              className="resume-download-btn"
              type="button"
            >
              <FiDownload />
              Download Resume
            </button>
          </div>
        </div>

        {/* Direct PDF Preview Viewer */}
        <div className="resume-preview">
          <object
            data={pdfUrl}
            type="application/pdf"
            width="100%"
            height="850px"
            className="resume-pdf-viewer"
          >
            <iframe
              src={pdfUrl}
              width="100%"
              height="850px"
              title="Chanchala Sidar Resume PDF"
            >
              <p>
                Your browser does not support inline PDF viewing.{" "}
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                  Click here to view the PDF file directly
                </a>
              </p>
            </iframe>
          </object>
        </div>

        {/* Bottom Download Button */}
        <div className="resume-bottom">
          <button
            onClick={handleDownload}
            className="resume-download-btn"
            type="button"
          >
            <FiDownload />
            Download Resume
          </button>
        </div>

      </div>
    </section>
  );
};

export default Resume;