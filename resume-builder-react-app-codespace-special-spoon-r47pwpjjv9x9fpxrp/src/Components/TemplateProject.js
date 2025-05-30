import "../Styles/TemplateKeySkill.css";
import { Container } from "@mui/material";
import React from "react";

const TemplateProjects = (props) => {
  return (
    <Container>
      <li className="skill">{props.Projects}</li>
    </Container>
  );
};

export default TemplateProjects;
