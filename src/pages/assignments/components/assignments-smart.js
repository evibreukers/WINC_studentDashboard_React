import React from "react";
import FilterAssignments from "./filter-assignments";
import { makeGraphAssign } from "../../../makeGraph";

class AssignmentsSmart extends React.Component {
  constructor() {
    super();
    this.state = {
      currentWeek: "week1",
      switch: true,
      selectedStudents: [],
      allSelected: true,
      selectedScore: "both",
    };
  }

  makeAssignmentArray = (assign) => {
    const newArray = [];
    this.props.scoreList.forEach((item) => {
      if (
        item.Assignment === assign &&
        this.state.selectedStudents.includes(item.Name)
      ) {
        newArray.push(item);
      }
    });
    return newArray;
  };

  selectWeek = (event) => {
    this.setState({ currentWeek: event.target.value });
  };

  selectStudent = (event) => {
    let updateSelectedStudents = this.state.selectedStudents;
    if (updateSelectedStudents.includes(event.target.name)) {
      updateSelectedStudents = updateSelectedStudents.filter(
        (student) => student !== event.target.name
      );
    } else if (!updateSelectedStudents.includes(event.target.name)) {
      updateSelectedStudents.push(event.target.name);
    }

    this.setState({
      selectedStudents: updateSelectedStudents,
      allSelected: false,
    });
  };

  selectAll = (event) => {
    if (this.state.allSelected) {
      this.setState({
        selectedStudents: [],
        allSelected: false,
      });
      document
        .querySelector(".selectStudent-panel")
        .querySelectorAll("input[type='checkbox']:checked")
        .forEach((item) => (item.checked = false));
    } else if (!this.state.allSelected) {
      this.setState({
        selectedStudents: this.props.studentNames,
        allSelected: true,
      });
      document
        .querySelector(".selectStudent-panel")
        .querySelectorAll("input[type='checkbox']")
        .forEach((item) => (item.checked = true));
    }
  };

  selectScore = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSwitch = () => {
    this.setState({ switch: !this.state.switch });
  };

  componentDidMount() {
    this.setState({ selectedStudents: this.props.studentNames });
    document
      .querySelector(".selectStudent-panel")
      .querySelectorAll("input[type='checkbox']")
      .forEach((item) => (item.checked = true));
  }

  render() {
    return (
      <div className="studentsWrapper">
        <h1 className="dashboard-titel">ASSIGNMENTS</h1>
        <FilterAssignments
          selectWeek={this.selectWeek}
          studentProfileList={this.props.studentProfileList}
          selectStudent={this.selectStudent}
          selectAll={this.selectAll}
          selectScore={this.selectScore}
          handleSwitch={this.handleSwitch}
        />

        <div className="graphGrid">
          {this.props.sortByWeek[this.state.currentWeek].map((item) => {
            return (
              <div className="graphBox">
                <div className="graph-titel">{item}</div>
                <button onClick={this.handleSwitch}>SWITCH GRAPH</button>
                <div className="graph">
                  {makeGraphAssign(
                    this.makeAssignmentArray(item),
                    20,
                    40,
                    this.state.switch,
                    0,
                    this.state.selectedStudents,
                    this.state.selectedScore
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AssignmentsSmart;
