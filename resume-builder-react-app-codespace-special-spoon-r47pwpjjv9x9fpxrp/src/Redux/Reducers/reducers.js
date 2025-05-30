//Initial values declared  to the reducer

const initialSelectedTemplateState = {
  selectedTemplateId: null,
  selectedResumeId: null,
};

const initialPersonalInfoState = {
  personalInfo: {
    profileImg: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    objective: "",
  },
};

const initialWorkExperienceState = {
  experiences: [
    {
      id: 1,
      jobTitle: "",
      organizationName: "",
      startYear: "",
      endYear: "",
    },
  ],
};

const initialEducationState = {
  educationInfo: {
    domain: "",
    university: "",
    degree: "",
    startYear: "",
    endYear: "",
  },
};

const initialSkillsState = {
  skills: ["", "", ""],
};

const initialTechSkillsState = {
  Techskills: ["", "", ""],
};

const initialProjectsState = {
  Projects: ["", "", ""],
};

const initialExtracurricularState = {
  Extracurricular: ["", "", ""],
};




export const selectedTemplateReducer = (
  state = initialSelectedTemplateState,
  action
) => {
  switch (action.type) {
    case "SELECTTEMPLATE":
      return { ...state, selectedTemplateId: action.payload };
    case "SELECTRESUME":
      return { ...state, selectedResumeId: action.payload };
    default:
      return state;
  }
};

export const personalInfoReducer = (
  state = initialPersonalInfoState,
  action
) => {
  switch (action.type) {
    case "ADDPERSONALINFO":
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.payload },
      };
    default:
      return state;
  }
};

export const workExperienceReducer = (
  state = initialWorkExperienceState,
  action
) => {
  switch (action.type) {
    case "ADDEXPERIENCE":
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      };
    case "ADDALLEXPERIENCE":
      return {
        ...state,
        experiences: action.payload,
      };
    default:
      return state;
  }
};

export const keySkillsReducer = (state = initialSkillsState, action) => {
  switch (action.type) {
    case "ADDNEWSKILLS":
      return { ...state, skills: [...state.skills, ""] };
    case "EDITSKILL": {
      return {
        ...state,
        skills: action.payload,
      };
    }
    case "DELETESKILL": {
      const newSkills = state.skills.filter(
        (skill, id) => id !== action.payload
      );

      return { ...state, skills: newSkills };
    }
    default:
      return state;
  }
};


export const TechSkillsReducer = (state = initialTechSkillsState, action) => {
  switch (action.type) {
    case "ADDTECHSKILLS":
      return { ...state, Techskills: [...state.Techskills, ""] };
    case "EDITTECHSKILL": {
      return {
        ...state,
        Techskills: action.payload,
      };
    }
    case "DELETETECHSKILL": {
      const newSkills = state.Techskills.filter(
        (Techskills, id) => id !== action.payload
      );

      return { ...state, Techskills: newSkills };
    }
    default:
      return state;
  }
};
export const ProjectsReducer = (state = initialProjectsState, action) => {
  switch (action.type) {
    case "ADDPROJECTS":
      return { ...state, Projects: [...state.Projects, ""] };
    case "EDITPROJECTS": {
      return {
        ...state,
        Projects: action.payload,
      };
    }
    case "DELETEProjects": {
      const newSkills = state.Projects.filter(
        (Projects, id) => id !== action.payload
      );

      return { ...state, Projects: newSkills };
    }
    default:
      return state;
  }
};
export const ExtracurricularReducer = (state = initialExtracurricularState, action) => {
  switch (action.type) {
    case "ADDEXTRACURRICULAR":
      return { ...state, Extracurricular: [...state.Extracurricular, ""] };
    case "EDITEXTRACURRICULAR": {
      return {
        ...state,
        Extracurricular: action.payload,
      };
    }
    case "DELETEExtracurricular": {
      const newSkills = state.Extracurricular.filter(
        (Extracurricular, id) => id !== action.payload
      );

      return { ...state, Extracurricular: newSkills };
    }
    default:
      return state;
  }
};



export const educationDetailsReducer = (
  state = initialEducationState,
  action
) => {
  switch (action.type) {
    case "ADDEDUCATION":
      return { ...state, educationInfo: action.payload };
    default:
      return state;
  }
};
