import React from "react";
import Navigation from "../../Navigation";
import StudentsSmart from "./components/students-smart";

function Students({
  scoreList,
  studentProfileList,
  currentStudent,
  changeStudent,
  darkMode,
  switchDark,
}) {
  return (
    <div>
      <Navigation darkMode={darkMode} switchDark={switchDark} />
      <main>
        <StudentsSmart
          scoreList={scoreList}
          studentProfileList={studentProfileList}
          currentStudent={currentStudent}
          changeStudent={changeStudent}
        />
      </main>
    </div>
  );
}

export default Students;
