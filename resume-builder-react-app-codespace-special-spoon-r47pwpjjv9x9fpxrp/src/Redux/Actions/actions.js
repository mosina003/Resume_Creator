//Actions triggers from the view and change the state or props by store help

export const selectTemplate= (id) => ({
  type: "SELECTTEMPLATE",
  payload: id,
});

export const selectResume = (id) => ({
  type: "SELECTRESUME",
  payload: id,
});

export const addPersonalInfo = (details) => ({
  type: "ADDPERSONALINFO",
  payload: details,
});



export const addTechSkill = () => ({
  type: "ADDTECHSKILLS",
  payload: null,
});

export const editTechSkill = (skills) => ({
  type: "EDITTECHSKILL",
  payload: skills,
});

export const deleteTechSkill = (id) => ({
  type: "DELETETECHSKILL",
  payload: id,
});
export const addProjects = () => ({
  type: "ADDPROJECTS",
  payload: null,
});

export const editProjects = (skills) => ({
  type: "EDITPROJECTS",
  payload: skills,
});

export const deleteProjects = (id) => ({
  type: "DELETEPROJECTS",
  payload: id,
});
export const addExtracurricular = () => ({
  type: "ADDEXTRACURRICULAR",
  payload: null,
});

export const editExtracurricular = (skills) => ({
  type: "EDITEXTRACURRICULAR",
  payload: skills,
});

export const deleteExtracurricular = (id) => ({
  type: "DELETEEXTRACURRICULAR",
  payload: id,
});

export const addExperience = (experience) => ({
  type: "ADDEXPERIENCE",
  payload: experience,
});

export const addAllExperience = (experiences) => ({
  type: "ADDALLEXPERIENCE",
  payload: experiences,
});

export const addNewSkills = () => ({
  type: "ADDNEWSKILLS",
  payload: null,
});

export const editSkill = (skills) => ({
  type: "EDITSKILL",
  payload: skills,
});

export const deleteSkill = (id) => ({
  type: "DELETESKILL",
  payload: id,
});

export const addEducation = (details) => ({
  type: "ADDEDUCATION",
  payload: details,
});
