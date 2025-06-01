import "../Styles/TemplateEducation.css";
import React from "react";

const TemplateEducation = ({ education }) => {
  return (
    <div className="template-education-container">
      <p className="template-education-line">
        <span className="template-education-degree">{education.degree}</span> in{" "}
        <span className="template-education-university">{education.university}</span>{" "}
        <span className="education-start-end">
          ({education.startYear} - {education.endYear})
        </span>
      </p>
      <p>
        <span className="template-education-sslcmark">SSLC/10th Mark: {education.sslcmark}</span>
      </p>
      <p>
        <span className="template-education-schoolname2">12th School Name: {education.schoolname2}</span>
      </p>
      <p>
        <span className="template-education-hscmark">HSC/12th Mark: {education.hscmark}</span>
      </p>
    </div>
  );
};

export default TemplateEducation;
