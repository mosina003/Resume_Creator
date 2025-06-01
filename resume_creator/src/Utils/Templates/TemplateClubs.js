import { Container, Paper } from "@mui/material";
import React from "react";
import "./Template.css";
import HeaderSection from "../../Components/HeaderSection";
import TempHeading from "../../Components/HeadingSection";
import { data } from "../Data/data";
import ExperienceSection from "../../Components/ExperienceSection";
import TemplateEducation from "../../Components/TemplateEducation";
import TemplateKeySkill from "../../Components/TemplateKeySkill";
import TemplateTechSkill  from "../../Components/TemplateTechSkill";
import TemplateProjects from "../../Components/TemplateProject";
import TemplateExtracurricular from "../../Components/TemplateExtracurricular";

const Template3 = (props) => {
  const personalinfo = props.personalinfo
    ? props.personalinfo
    : data.personal_info;
  const workexperience = props.workexperience
    ? props.workexperience
    : data.work_experience;
  const educationinfo = props.educationinfo
    ? props.educationinfo
    : data.education_details;
  const skills = props.skills ? props.skills : data.key_skills;

  
  const Techskills = props.Techskills ? props.Techskills : data.key_Techskills;

  const Projects = props.Projects ? props.Projects : data.key_Projects;

  const Extracurricular = props.Extracurricular ? props.Extracurricular : data.key_Extracurricular;
  return (
    <Paper
      sx={{
        width: {
          xs: "350px",
          sm: "400px",
          md: "450px",
          lg: "500px",
          xl: "600px",
        },
        height: {
          xs: "1000px",
          sm: "700px",
          md: "800px",
          lg: "900px",
          xl: "1000px",
        },
      }}
      id={`${props.index}report`}
      elevation={3}>
      <HeaderSection
        primaryColor={"white"}
        secondaryColor={"white"}
        bgColor={"#9B536F"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      <Container>
        <TempHeading color={"#9B536F"} Hupcolor={"none"} Hupheight={"none"} Hdowncolor={"#9B536F"} Hdownheight={"none"} title={"Training/Internships"} />
        <ul style={{ marginBottom: 10 }}>
          {workexperience.map((experience, index) => {
            return (
              <ExperienceSection
                key={index}
                experience={experience}
              />
            );
          })}
        </ul>
        <TempHeading color={"#9B536F"} Hupcolor={"none"} Hupheight={"none"} Hdowncolor={"#9B536F"} Hdownheight={"none"} title={"Education"} />
        <TemplateEducation education={educationinfo} />
        <TempHeading color={"#9B536F"} Hupcolor={"none"} Hupheight={"none"} Hdowncolor={"#9B536F"} Hdownheight={"none"} title={"Soft Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {skills.map((skill, index) => {
            return <TemplateKeySkill key={index} skill={skill} />;
          })}
        </ul>
        <TempHeading color={"#9B536F"} Hupcolor={"none"} Hupheight={"3px"} Hdowncolor={"#9B536F"} Hdownheight={"none"} title={"Technical Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {Techskills.map((skill, index) => {
            return <TemplateTechSkill key={index} TechSkills={skill} />;
          })}
        </ul>
        <TempHeading color={"#9B536F"} Hupcolor={"none"} Hupheight={"3px"} Hdowncolor={"#9B536F"} Hdownheight={"none"} title={"Projects"} />
        <ul style={{ marginBottom: 10 }}>
          {Projects.map((skill, index) => {
            return <TemplateProjects key={index} Projects={skill} />;
          })}
        </ul>
        <TempHeading color={"#9B536F"} Hupcolor={"none"} Hupheight={"3px"} Hdowncolor={"#9B536F"} Hdownheight={"none"} title={"Extracurricular"} />
        <ul style={{ marginBottom: 10 }}>
          {Extracurricular.map((skill, index) => {
            return <TemplateExtracurricular key={index} Extracurricular={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

export default Template3;
