import "../Styles/KeyskillsSection.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Paper, Divider, Button } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { connect } from "react-redux";
import {BackNextButton,Input} from "../Pages/index";
import { addProjects, deleteProjects, editProjects } from "../Redux/Actions/actions";

const mapStatetoProps = (state) => ({
  Projects: state.ProjectsReducer.Projects,
});

const mapDispatchtoProps = (dispatch) => ({
  onAddProjects: () => dispatch(addProjects()),
  onEditProjects: (Projects) => dispatch(editProjects(Projects)),
  onDeleteProjects: (index) => dispatch(deleteProjects(index)),
});

function ProjectsSection(props) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePreview = (data) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);

  };


  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  const onEditProjects= (value, id) => {
    const Projects = props.Projects.map((Projects, index) => {
      if (index === id) {
        return value;
      } else return Projects;
    });

    props.onEditProjects(Projects);
  };

  return (
    <Paper elevation={3} className="key-skills-paper">
      <h2 className="key-skills-heading">Projects</h2>
      <Divider />
      <form onSubmit={handleSubmit(handlePreview)}>
        <div className="key-skills-form-fields">
          {props.Projects.map((skill, index) => {
            return (
              <div key={index} className="key-input-with-delete">
                <Input
                  type="text"
                  name={`skill${index + 1}`}
                  register={register}
                  multiline={false}
                  value={skill}
                  setValue={(skill) => onEditProjects(skill, index)}
                  error={errors[`skill${index + 1}`] ? true : false}
                  errorMessage={
                    errors[`skill${index + 1}`]
                      ? errors[`skill${index + 1}`].message
                      : null
                  }
                />
                {props.Projects.length === 1 ? null : (
                  <DeleteOutlineOutlinedIcon
                    sx={{ marginLeft: "10px" }}
                    onClick={() => props.onDeleteSkill(index)}
                  />
                )}
              </div>
            );
          })}
        </div>
        {props.Projects.length >= 7 ? null : (
          <Button
            className="add-new-btn"
            variant="text"
            onClick={props.onAddTechNewSkill}>
            Add new
          </Button>
        )}
        <Divider className="key-skills-divider" />
       
        <BackNextButton
          onNext={() => handleSubmit}
          onBack={handleBack}
          loading={loading}
          tab={props.tab}
          nextTitle={"Next"}
          backTitle={"Back"}
        />
      </form>
    </Paper>
  );
}

export default connect(mapStatetoProps, mapDispatchtoProps)(ProjectsSection);