import React from "react";
import FilterAssignments from "./filter-assignments";
import { makeGraphAssign } from "../../../makegraph";

class AssignmentsSmart extends React.Component {
  constructor() {
    super();
    this.state = {
      currentWeek: "week1",
      switch: true,
      selectedStudents: [],
      allSelected: true,
      selectedScore: "both",
      sortBy: "default",
    };
  }

  compareFun = (a, b) => {
    const A = a.Fun;
    const B = b.Fun;

    let comparison = 0;
    if (A > B) {
      comparison = 1;
    } else if (A < B) {
      comparison = -1;
    }
    return comparison;
  };

  compareDiff = (a, b) => {
    const A = a.Difficulty;
    const B = b.Difficulty;

    let comparison = 0;
    if (A > B) {
      comparison = 1;
    } else if (A < B) {
      comparison = -1;
    }
    return comparison;
  };

  makeAssignmentArray = (assign, sorter) => {
    let newArray = [];
    this.props.scoreList.forEach((item) => {
      if (
        item.Assignment === assign &&
        this.state.selectedStudents.includes(item.Name)
      ) {
        newArray.push(item);
      }
    });
    if (this.state.sortBy === "funas") {
      newArray = newArray.sort(this.compareFun);
    } else if (this.state.sortBy === "funde") {
      newArray = newArray.sort(this.compareFun).reverse();
    } else if (this.state.sortBy === "diffas") {
      newArray = newArray.sort(this.compareDiff);
    } else if (this.state.sortBy === "diffde") {
      newArray = newArray.sort(this.compareDiff);
    }

    return newArray;
  };

  selectWeek = (event) => {
    this.setState({ currentWeek: event.target.value });
  };

  handleSort = (event) => {
    this.setState({ sortBy: event.target.value });
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
      <div className="assignmentsWrapper">
        <h1 className="dashboard-titel">ASSIGNMENTS</h1>
        <FilterAssignments
          selectWeek={this.selectWeek}
          studentProfileList={this.props.studentProfileList}
          selectStudent={this.selectStudent}
          selectAll={this.selectAll}
          selectScore={this.selectScore}
          handleSwitch={this.handleSwitch}
          handleSort={this.handleSort}
        />

        <div className="graphGrid">
          {this.props.sortByWeek[this.state.currentWeek].map((item) => {
            return (
              <div
                className="graphBox"
                key={this.props.sortByWeek[this.state.currentWeek].indexOf(
                  item
                )}
              >
                <div className="graph-header">
                  <div className="button-panel" onClick={this.handleSwitch}>
                    <div className="button-bg"></div>
                    <i className="fas fa-sync-alt button-icon"></i>
                    <h1 className="button-text">
                      switch graph <i className="fas fa-arrow-right"></i>
                    </h1>
                  </div>

                  <div className="graph-title">{item}</div>
                </div>

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
