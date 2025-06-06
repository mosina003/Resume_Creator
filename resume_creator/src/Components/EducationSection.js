import { Divider, MenuItem, Paper, Select } from "@mui/material";
import React, { useState } from "react";
import {BackNextButton,SelectComponent,Input} from "../Pages/index";
import { connect } from "react-redux";
import { addEducation } from "../Redux/Actions/actions";
import { useForm, Controller } from "react-hook-form";
import "../Styles/EducationSection.css";

const mapStatetoProps = (state) => ({
  educationInfo: state.educationDetailsReducer.educationInfo,
});

const mapDispatchtoProps = (dispatch) => ({
  onAddEducation: (details) => dispatch(addEducation(details)),
});

const years = [
  " Present ",
  " 2024 ",
  " 2023 ",
  " 2022 ",
  " 2021 ",
  " 2020 ",
  " 2019 ",
  " 2018 ",
  " 2017 ",
  " 2016 ",
  " 2015 ",
  " 2014 ",
  " 2013 ",
  " 2012 ",
  " 2011 ",
  " 2010 ",
  ];

const EducationSection = (props) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  const handleNext = (data) => {
    setLoading(true);
    props.onAddEducation(data);

    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };


  return (
    <Paper className="education-paper" elevation={3}>
      <h2 className="education-heading">Education Details</h2>
      <Divider sx={{ margin: "10px 0px" }} />
      <form onSubmit={handleSubmit(handleNext)}>
        <div className="education-form-cont">
          <Input
            title={"10th School name"}
            type={"text"}
            name={"schoolname1"}
            register={register}
            multiline={false}
            value={props.educationInfo.schoolname1}
            setValue={(value) =>
              props.onAddEducation({ ...props.educationInfo, Schoolname1: value })
            }
            error={errors.domain ? true : false}
            errorMessage={errors.domain ? errors.domain.message : null}
          />
          <div></div>
          <Input
            title={"SSLC/10th mark"}
            type={"text"}
            name={"sslcmark"}
            register={register}
            multiline={false}
            value={props.educationInfo.sslcmark}
            setValue={(value) =>
              props.onAddEducation({ ...props.educationInfo, sslcmark: value })
            }
            error={errors.schoolname1 ? true : false}
            errorMessage={errors.schoolname1 ? errors.schoolname1.message : null}
          />
          <div></div>
          <Input
            title={"12th School name"}
            type={"text"}
            name={"schoolname2"}
            register={register}
            multiline={false}
            value={props.educationInfo.schoolname2}
            setValue={(value) =>
              props.onAddEducation({ ...props.educationInfo, schoolname2: value })
            }
            error={errors.schoolname2 ? true : false}
            errorMessage={errors.schoolname2 ? errors.schoolname2 : null}
          />
          <div></div>
          <Input
            title={"HSC/12th mark"}
            type={"text"}
            name={"hscmark"}
            register={register}
            multiline={false}
            value={props.educationInfo.hscmark}
            setValue={(value) =>
              props.onAddEducation({ 
                ...props.educationInfo,
                 hscmark: value,
               })
            }
            error={errors.hscmark ? true : false}
            errorMessage={errors.hscmark ? errors.hscmark.message : null}
          />
          <div></div>
          <Input
            title={"University"}
            type={"text"}
            name={"university"}
            register={register}
            multiline={false}
            value={props.educationInfo.university}
            setValue={(value) =>
              props.onAddEducation({
                ...props.educationInfo,
                university: value,
              })
            }
            error={errors.university ? true : false}
            errorMessage={errors.university ? errors.university.message : null}
          />
          <Input
            title={"Degree"}
            type={"text"}
            name={"degree"}
            register={register}
            multiline={false}
            value={props.educationInfo.degree}
            setValue={(value) =>
              props.onAddEducation({
                 ...props.educationInfo,
                  degree: value
                 })
            }
            error={errors.degree ? true : false}
            errorMessage={errors.degree ? errors.degree.message : null}
          />
          <div></div>
          <Input
            title={"CGPA"}
            type={"text"}
            name={"cgpa"}
            register={register}
            multiline={false}
            value={props.educationInfo.cgpa}
            setValue={(value) =>
              props.onAddEducation({ ...props.educationInfo, cgpa: value })
            }
            error={errors.domain ? true : false}
            errorMessage={errors.domain ? errors.domain.message : null}
          />
          <SelectComponent
            title={"Start Year"}
            errorMessage={errors.startYear ? errors.startYear.message : null}
            error={errors.startYear ? true : false}>
            <Controller
              render={(props) => {
                // console.log(props);
                return (
                  <Select
                    value={props.field.value}
                    onChange={props.field.onChange}
                    error={errors.startYear ? true : false}>
                    {years.map((year, index) => {
                      return (
                        <MenuItem key={index} value={year}>
                          {year}
                        </MenuItem>
                      );
                    })}
                  </Select>
                );
              }}
              name={"startYear"}
              control={control}
              rules={{ required: "*Please select start year" }}
              defaultValue={props.educationInfo.startYear}
            />
          </SelectComponent>
          <SelectComponent
            title={"End Year"}
            errorMessage={errors.endYear ? errors.endYear.message : null}
            error={errors.endYear ? true : false}>
            <Controller
              render={(props) => (
                <Select
                  value={props.field.value}
                  onChange={props.field.onChange}
                  error={errors.endYear ? true : false}>
                  {years.map((year, index) => {
                    return (
                      <MenuItem key={index} value={year}>
                        {year}
                      </MenuItem>
                    );
                  })}
                </Select>
              )}
              name={"endYear"}
              control={control}
              rules={{ required: "*Please select end year" }}
              defaultValue={props.educationInfo.endYear}
            />
          </SelectComponent>
        </div>
        <Divider sx={{ margin: "10px 0px" }} />
        <BackNextButton
          onNext={handleNext}
          onBack={handleBack}
          loading={loading}
          tab={props.tab}
          nextTitle={"Next"}
          backTitle={"Back"}
        />
      </form>
    </Paper>
  );
};

export default connect(mapStatetoProps, mapDispatchtoProps)(EducationSection);