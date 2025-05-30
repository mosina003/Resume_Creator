//Reducers are combined with combined reducer as root reducer.

import {
  selectedTemplateReducer,
  personalInfoReducer,
  workExperienceReducer,
  keySkillsReducer,
  TechSkillsReducer,
  ProjectsReducer,
  ExtracurricularReducer,
  educationDetailsReducer,
} from "./reducers";


import { combineReducers } from "redux";

const rootReducer = combineReducers({
  selectedTemplateReducer,
  personalInfoReducer,
  workExperienceReducer,
  keySkillsReducer,
  TechSkillsReducer,
  ProjectsReducer,
  ExtracurricularReducer,
  educationDetailsReducer,
});

export default rootReducer;
