import React from "react";
import Navigation from "../../navigation";
import NewStudentSmart from "./components/newstudent-smart";

function NewStudent({
  addStudent,
  onBlur,
  selectAvatar,
  darkMode,
  switchDark,
}) {
  return (
    <div>
      <Navigation darkMode={darkMode} switchDark={switchDark} />
      <main className="mainNewStudent">
        <NewStudentSmart
          addStudent={addStudent}
          onBlur={onBlur}
          selectAvatar={selectAvatar}
        />
      </main>
    </div>
  );
}

export default NewStudent;
