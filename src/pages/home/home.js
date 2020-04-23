import React from "react";
import Navigation from "../../Navigation";
import DashboardSmart from "./components/dashboard-smart";

function Home({ scoreList, studentNames, assignmentList }) {
  return (
    <div>
      <Navigation />
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
