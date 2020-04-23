import React from "react";
import Navigation from "../../Navigation";
import AssignmentsSmart from "./components/assignments-smart";

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
    </div>
  );
}

export default Assignments;
