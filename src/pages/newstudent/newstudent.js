import React from "react";
import Navigation from "../../Navigation";
import NewStudentSmart from "./components/newstudent-smart";

function NewStudent({ addStudent, onBlur, selectAvatar }) {
  return (
    <div>
      <Navigation />
      <main>
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
