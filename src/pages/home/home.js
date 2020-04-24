import React from "react";
import Navigation from "../../navigation";
import DashboardSmart from "./components/dashboard-smart";
import StaticButtons from "../../staticbuttons";

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
      <StaticButtons />
    </div>
  );
}

export default Home;
