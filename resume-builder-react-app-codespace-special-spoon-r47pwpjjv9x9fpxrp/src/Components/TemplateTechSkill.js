import "../Styles/TemplateKeySkill.css";
import { Container } from "@mui/material";
import React from "react";

const TemplateTechSkill = (props) => {
  return (
    <Container>
      <li className="skill">{props.TechSkills}</li>
    </Container>
  );
};

export default TemplateTechSkill;
