import "../Styles/KeyskillsSection.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Paper, Divider, Button } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { connect } from "react-redux";
import {BackNextButton,Input} from "../Pages/index";
import { addExtracurricular, deleteExtracurricular, editExtracurricular } from "../Redux/Actions/actions";

const mapStatetoProps = (state) => ({
  Extracurricular: state.ExtracurricularReducer.Extracurricular,
});

const mapDispatchtoProps = (dispatch) => ({
  onAddExtracurricular: () => dispatch(addExtracurricular()),
  onEditExtracurricular: (Extracurricular) => dispatch(editExtracurricular(Extracurricular)),
  onDeleteExtracurricular: (index) => dispatch(deleteExtracurricular(index)),
});

function ExtracurricularSection(props) {
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

  const onEditExtracurricular= (value, id) => {
    const Extracurricular = props.Extracurricular.map((Extracurricular, index) => {
      if (index === id) {
        return value;
      } else return Extracurricular;
    });

    props.onEditExtracurricular(Extracurricular);
  };

  return (
    <Paper elevation={3} className="key-skills-paper">
      <h2 className="key-skills-heading">Extracurricular</h2>
      <Divider />
      <form onSubmit={handleSubmit(handlePreview)}>
        <div className="key-skills-form-fields">
          {props.Extracurricular.map((skill, index) => {
            return (
              <div key={index} className="key-input-with-delete">
                <Input
                  type="text"
                  name={`skill${index + 1}`}
                  register={register}
                  multiline={false}
                  value={skill}
                  setValue={(skill) => onEditExtracurricular(skill, index)}
                  error={errors[`skill${index + 1}`] ? true : false}
                  errorMessage={
                    errors[`skill${index + 1}`]
                      ? errors[`skill${index + 1}`].message
                      : null
                  }
                />
                {props.Extracurricular.length === 1 ? null : (
                  <DeleteOutlineOutlinedIcon
                    sx={{ marginLeft: "10px" }}
                    onClick={() => props.onDeleteSkill(index)}
                  />
                )}
              </div>
            );
          })}
        </div>
        {props.Extracurricular.length >= 7 ? null : (
          <Button
            className="add-new-btn"
            variant="text"
            onClick={props.onAddTechNewSkill}>
            Add new
          </Button>
        )}
        <Divider className="key-skills-divider" />
       
        <BackNextButton
          onNext={handlePreview}
          loading={loading}
          tab={props.tab}
          onBack={handleBack}
          nextTitle={"Preview"}
          backTitle={"Back"}
        />
      </form>
    </Paper>
  );
}

export default connect(mapStatetoProps, mapDispatchtoProps)(ExtracurricularSection);