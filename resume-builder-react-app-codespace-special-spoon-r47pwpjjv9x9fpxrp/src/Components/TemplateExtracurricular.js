import "../Styles/TemplateKeySkill.css";
import { Container } from "@mui/material";
import React from "react";

const TemplateExtracurricular = (props) => {
  return (
    <Container>
      <li className="skill">{props.Extracurricular}</li>
    </Container>
  );
};

export default TemplateExtracurricular;
