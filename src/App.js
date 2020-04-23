import React from "react";
import studentProfiles from "./data/STUDENT_PROFILES.json";
import { scoreData } from "./data/DATA";
import { newStudentData } from "./data/DATA";
import Root from "./Root";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      scoreList: scoreData,
      studentProfileList: studentProfiles,
      currentStudent: {
        id: 1,
        first_name: "Evelyn",
        last_name: "Lockey",
        email: "nlockey0@tripadvisor.com",
        gender: "Female",
        avatar:
          "https://i.pinimg.com/564x/91/fc/58/91fc58add6272e37ec3edd3cce302bf3.jpg",
      },
      newStudentProfile: {
        id: 0,
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        avatar: "https://randomuser.me/api/portraits/lego/5.jpg",
      },
      newStudentScore: newStudentData,
    };
  }

  changeStudent = (event) => {
    const selectCurrentStudent = this.state.studentProfileList.find(
      (student) => student.first_name === event.target.value
    );
    this.setState({ currentStudent: selectCurrentStudent });
  };

  onBlur = (event) => {
    const thisKey = event.target.name;
    const thisValue = event.target.value;
    this.setState((prevState) => {
      const newProfile = prevState.newStudentProfile;
      newProfile[thisKey] = thisValue;
      return { newStudentProfile: newProfile };
    });
    console.log(this.state.newStudentProfile);
  };

  getInput() {
    const updateStudent = this.state.newStudentProfile;
    updateStudent.id = this.state.studentProfileList.length + 1;
    this.setState({
      newStudentProfile: updateStudent,
    });
  }

  addStudent = () => {
    const emptyInput = [];

    document
      .querySelector(".newstudent-form")
      .querySelectorAll("input")
      .forEach((input) => {
        if (input.value.length === 0) {
          emptyInput.push(input);
        }
      });

    if (emptyInput.length !== 0) {
      alert("enter all fields");
      return;
    }

    this.getInput();
    const updateStudentScore = this.state.newStudentScore.map((item) => {
      item.Name = this.state.newStudentProfile.first_name;
      item.Difficulty = Math.floor(Math.random() * 4 + 1);
      item.Fun = Math.floor(Math.random() * 4 + 1);
      return item;
    });
    this.setState({ newStudentScore: updateStudentScore });

    const currentScoreList = this.state.scoreList;
    const updateScoreList = currentScoreList.concat(this.state.newStudentScore);
    this.setState({ scoreList: updateScoreList });

    const currentStudentList = this.state.studentProfileList;
    const updateStudentList = currentStudentList.concat(
      this.state.newStudentProfile
    );
    this.setState({ studentProfileList: updateStudentList });

    document
      .querySelector(".newstudent-form")
      .querySelectorAll("input")
      .forEach((input) => (input.value = ""));

    alert("student has been added");
  };

  selectAvatar = (eventTarget) => {
    const src = eventTarget.src;
    this.setState((prevState) => {
      prevState.newStudentProfile.avatar = src;
      return { newStudentProfile: prevState.newStudentProfile };
    });
  };

  render = () => {
    return (
      <div className="App">
        <Root
          scoreList={this.state.scoreList}
          studentProfileList={this.state.studentProfileList}
          currentStudent={this.state.currentStudent}
          addStudent={this.addStudent}
          changeStudent={this.changeStudent}
          onBlur={this.onBlur}
          selectAvatar={this.selectAvatar}
        />
      </div>
    );
  };
}

export default Main;
