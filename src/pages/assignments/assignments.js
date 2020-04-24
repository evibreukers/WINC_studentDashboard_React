import React from "react";
import Navigation from "../../navigation";
import AssignmentsSmart from "./components/assignments-smart";
import StaticButtons from "../../staticbuttons";

function Assignments({
  scoreList,
  studentProfileList,
  studentNames,
  assignmentList,
  sortByWeek,
  darkMode,
  switchDark,
}) {
  return (
    <div>
      <Navigation darkMode={darkMode} switchDark={switchDark} />
      <main>
        <AssignmentsSmart
          scoreList={scoreList}
          studentProfileList={studentProfileList}
          studentNames={studentNames}
          assignmentList={assignmentList}
          sortByWeek={sortByWeek}
        />
      </main>
      <StaticButtons />
    </div>
  );
}

export default Assignments;
