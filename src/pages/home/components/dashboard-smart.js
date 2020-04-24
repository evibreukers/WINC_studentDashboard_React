import React from "react";
import DashboardUI from "./dashboard-ui";
function DashboardSmart({ scoreList, studentNames, assignmentList }) {
  /* calculate average for each ASSIGNMENT */
  const averageScores = [];
  assignmentList.forEach((thisAssign) => {
    /* calculate average difficulty-score */
    let allDiffScores = [];
    studentNames.forEach((thisName) => {
      scoreList.forEach((item) => {
        if (item.Assignment === thisAssign && item.Name === thisName) {
          allDiffScores.push(item.Difficulty);
        }
      });
    });
    const totalDiff = allDiffScores.reduce((a, b) => a + b, 0);
    const averageDiff = totalDiff / allDiffScores.length;

    /* calculate average fun-score */
    let allFunScores = [];
    studentNames.forEach((thisName) => {
      scoreList.forEach((item) => {
        if (item.Assignment === thisAssign && item.Name === thisName) {
          allFunScores.push(item.Fun);
        }
      });
    });
    const totalFun = allFunScores.reduce((a, b) => a + b, 0);
    const averageFun = totalFun / allFunScores.length;

    /* add week */
    const week = thisAssign.slice(1, 2);

    /* add project-boolean */
    let isProject;
    scoreList.forEach((item) => {
      if (item.Assignment === thisAssign && item.Project === true) {
        isProject = true;
      } else if (item.Assignment === thisAssign && item.Project === false) {
        isProject = false;
      }
      return;
    });

    /* push items to arary */
    const name = thisAssign;
    averageScores.push({
      Assignment: name,
      Difficulty: averageDiff,
      Fun: averageFun,
      Week: week,
      Project: isProject,
    });
  });

  return (
    <div>
      <DashboardUI scoreList={scoreList} averageScores={averageScores} />
    </div>
  );
}

export default DashboardSmart;
