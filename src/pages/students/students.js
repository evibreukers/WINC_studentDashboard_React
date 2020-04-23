import React from "react";
import Navigation from "../../Navigation";
import StudentsSmart from "./components/students-smart";

function Students({
  scoreList,
  studentProfileList,
  currentStudent,
  changeStudent,
}) {
  return (
    <div>
      <Navigation />
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
