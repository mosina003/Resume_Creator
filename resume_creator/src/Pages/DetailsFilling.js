import React, { useState } from "react";
import {
  Navbar,
  SidebarDetailFilling,
  EducationSection,
  KeyskillsSection,
  PersonalInformation,
  ResumePreview,
  WorkExperience,
  TechSkill,
  Projects,
  Extracurricular,
} from "./";
import "./Styles/DetailsFilling.css";

// As soon as details are filled for particular section browser moves further to next fields 
// if  there is same field on same page

const DetailsFilling = (props) => {
  const [tab, setTab] = useState(0);

  return (
    <div className="details-filling">
      <Navbar active={""} />
      {tab === 7 ? null : (
        <div className="details-filling-cont">
          <SidebarDetailFilling tab={tab} setTab={setTab} />
          {tab === 0 ? (
            <PersonalInformation setTab={setTab} tab={tab} />
          ) : null}
          {tab === 3 ? <KeyskillsSection setTab={setTab} tab={tab} /> : null}
          {tab === 1 ? (
            <WorkExperience setTab={setTab} tab={tab} />
          ) : null}
          {tab === 2 ? <EducationSection setTab={setTab} tab={tab} /> : null}

          {tab === 4 ? <TechSkill setTab={setTab} tab={tab} /> : null}

          {tab === 5 ? <Projects setTab={setTab} tab={tab} /> : null}

          {tab === 6 ? <Extracurricular setTab={setTab} tab={tab} /> : null}
        </div>
      )}
      {tab === 7 ? <ResumePreview setTab={setTab} tab={tab} /> : null}
    </div>
  );
};

export default DetailsFilling;
