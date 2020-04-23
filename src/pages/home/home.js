import React from "react";
import Navigation from "../../Navigation";
import DashboardSmart from "./components/dashboard-smart";

function Home({
  scoreList,
  studentNames,
  assignmentList,
  darkMode,
  switchDark,
}) {
  return (
    <div>
      <Navigation darkMode={darkMode} switchDark={switchDark} />
      <main>
        <DashboardSmart
          scoreList={scoreList}
          studentNames={studentNames}
          assignmentList={assignmentList}
        />
      </main>
    </div>
  );
}

export default Home;
