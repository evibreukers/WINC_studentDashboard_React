import React from "react";
import Navigation from "../../navigation";
import StudentsSmart from "./components/students-smart";
import StaticButtons from "../../staticbuttons";

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
      <StaticButtons />
    </div>
  );
}

export default Students;
