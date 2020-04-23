import React from "react";
import "../src/assets/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import Assignments from "./pages/assignments/assignments";
import Students from "./pages/students/students";
import NewStudent from "./pages/newstudent/newstudent";

function Root({
  scoreList,
  studentProfileList,
  currentStudent,
  addStudent,
  changeStudent,
  onBlur,
  selectAvatar,
  darkMode,
  switchDark,
}) {
  /* sort assignments per week */
  const sortByWeek = {
    week1: [],
    week2: [],
    week3: [],
    week4: [],
    week5: [],
    week6: [],
    projects: [],
  };

  scoreList.forEach((item) => {
    switch (item.Assignment[1]) {
      case "1":
        if (!sortByWeek.week1.includes(item.Assignment)) {
          sortByWeek.week1.push(item.Assignment);
        }
        break;
      case "2":
        if (!sortByWeek.week2.includes(item.Assignment)) {
          sortByWeek.week2.push(item.Assignment);
        }
        break;
      case "3":
        if (!sortByWeek.week3.includes(item.Assignment)) {
          sortByWeek.week3.push(item.Assignment);
        }
        break;
      case "4":
        if (!sortByWeek.week4.includes(item.Assignment)) {
          sortByWeek.week4.push(item.Assignment);
        }
        break;
      case "5":
        if (!sortByWeek.week5.includes(item.Assignment)) {
          sortByWeek.week5.push(item.Assignment);
        }
        break;
      case "6":
        if (!sortByWeek.week6.includes(item.Assignment)) {
          sortByWeek.week6.push(item.Assignment);
        }
        break;
      default:
        return;
    }
  });

  /*  make list of all student-names */
  const studentNames = [];
  scoreList.forEach((item) => {
    if (studentNames.includes(item.Name)) {
      return;
    } else {
      studentNames.push(item.Name);
    }
  });

  /*  make list of all assignments */
  const assignmentList = [];
  scoreList.forEach((item) => {
    if (assignmentList.includes(item.Assignment)) {
      return;
    } else {
      assignmentList.push(item.Assignment);
    }
  });

  return (
    <Router>
      {console.log(sortByWeek)}
      <Switch>
        <Route path="/assignments">
          <Assignments
            scoreList={scoreList}
            studentProfileList={studentProfileList}
            studentNames={studentNames}
            assignmentList={assignmentList}
            sortByWeek={sortByWeek}
            darkMode={darkMode}
            switchDark={switchDark}
          />
        </Route>
        <Route path="/students">
          <Students
            scoreList={scoreList}
            studentProfileList={studentProfileList}
            currentStudent={currentStudent}
            changeStudent={changeStudent}
            darkMode={darkMode}
            switchDark={switchDark}
          />
        </Route>
        <Route path="/newstudent">
          <NewStudent
            addStudent={addStudent}
            onBlur={onBlur}
            selectAvatar={selectAvatar}
            darkMode={darkMode}
            switchDark={switchDark}
          />
        </Route>
        <Route path="/home">
          <Home
            scoreList={scoreList}
            studentNames={studentNames}
            assignmentList={assignmentList}
            darkMode={darkMode}
            switchDark={switchDark}
          />
        </Route>
        <Route exact path="/">
          <Home
            scoreList={scoreList}
            studentNames={studentNames}
            assignmentList={assignmentList}
            darkMode={darkMode}
            switchDark={switchDark}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default Root;
