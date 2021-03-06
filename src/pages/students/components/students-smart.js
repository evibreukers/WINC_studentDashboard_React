import React from "react";
import { makeGraph } from "../../../makegraph";
import FilterStudents from "./filter-students";

class StudentSmart extends React.Component {
  constructor() {
    super();
    this.state = {
      btnGraph1: true,
      btnGraph2: true,
      btnGraph3: true,
      btnGraph4: true,
      btnGraph5: true,
      btnGraph6: true,
      btnGraph7: true,
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

  handleSort = (event) => {
    this.setState({ sortBy: event.target.value });
  };

  /* make array of scores per week */
  makeWeekArray(weekNum) {
    let newArray = [];
    this.props.scoreList.forEach((item) => {
      const week = item.Assignment.slice(1, 2);
      if (
        week === weekNum &&
        this.props.currentStudent.first_name === item.Name &&
        item.Project === false
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
  }

  /* make array of projects */
  makeProjectArray() {
    let newArray = [];
    this.props.scoreList.forEach((item) => {
      if (
        this.props.currentStudent.first_name === item.Name &&
        item.Project === true
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
  }

  selectScore = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSwitch = (event) => {
    const thisGraph = event.target.getAttribute("data-name");
    this.setState({ [thisGraph]: !this.state[thisGraph] });
  };

  render() {
    return (
      <div className="studentsWrapper">
        <h1 className="dashboard-titel">STUDENTS</h1>
        <FilterStudents
          studentProfileList={this.props.studentProfileList}
          changeStudent={this.props.changeStudent}
          selectScore={this.selectScore}
          currentStudent={this.props.currentStudent}
          handleSort={this.handleSort}
        />

        <div className="graphGrid">
          {/* graphbox 1 */}
          <div className="graphBox">
            <div className="graph-header">
              <div class="button-panel" onClick={this.handleSwitch}>
                <div class="button-bg" data-name="btnGraph1"></div>
                <i class="fas fa-sync-alt button-icon"></i>
                <h1 class="button-text" data-name="btnGraph1">
                  switch graph <i class="fas fa-arrow-right"></i>
                </h1>
              </div>

              <div className="graph-title">WEEK 1</div>
            </div>
            <div className="graph">
              {makeGraph(
                this.makeWeekArray("1"),
                15,
                40,
                this.state.btnGraph1,
                0,
                this.state.selectedScore,
                14,
                "middle",
                50
              )}
            </div>
          </div>

          {/* graphbox 2 */}
          <div className="graphBox">
            <div className="graph-header">
              <div class="button-panel" onClick={this.handleSwitch}>
                <div class="button-bg" data-name="btnGraph2"></div>
                <i class="fas fa-sync-alt button-icon"></i>
                <h1 class="button-text" data-name="btnGraph2">
                  switch graph <i class="fas fa-arrow-right"></i>
                </h1>
              </div>

              <div className="graph-title">WEEK 2</div>
            </div>
            <div className="graph">
              {makeGraph(
                this.makeWeekArray("2"),
                15,
                40,
                this.state.btnGraph2,
                0,
                this.state.selectedScore,
                14,
                "middle",
                50
              )}
            </div>
          </div>

          {/* graphbox 3 */}
          <div className="graphBox">
            <div className="graph-header">
              <div class="button-panel" onClick={this.handleSwitch}>
                <div class="button-bg" data-name="btnGraph3"></div>
                <i class="fas fa-sync-alt button-icon"></i>
                <h1 class="button-text" data-name="btnGraph3">
                  switch graph <i class="fas fa-arrow-right"></i>
                </h1>
              </div>

              <div className="graph-title">WEEK 3</div>
            </div>
            <div className="graph">
              {makeGraph(
                this.makeWeekArray("3"),
                15,
                40,
                this.state.btnGraph3,
                0,
                this.state.selectedScore,
                14,
                "middle",
                50
              )}
            </div>
          </div>

          {/* graphbox 4 */}
          <div className="graphBox">
            <div className="graph-header">
              <div class="button-panel" onClick={this.handleSwitch}>
                <div class="button-bg" data-name="btnGraph4"></div>
                <i class="fas fa-sync-alt button-icon"></i>
                <h1 class="button-text" data-name="btnGraph4">
                  switch graph <i class="fas fa-arrow-right"></i>
                </h1>
              </div>

              <div className="graph-title">WEEK 4</div>
            </div>
            <div className="graph">
              {makeGraph(
                this.makeWeekArray("4"),
                15,
                40,
                this.state.btnGraph4,
                0,
                this.state.selectedScore,
                14,
                "middle",
                50
              )}
            </div>
          </div>

          {/* graphbox 5 */}
          <div className="graphBox">
            <div className="graph-header">
              <div class="button-panel" onClick={this.handleSwitch}>
                <div class="button-bg" data-name="btnGraph5"></div>
                <i class="fas fa-sync-alt button-icon"></i>
                <h1 class="button-text" data-name="btnGraph5">
                  switch graph <i class="fas fa-arrow-right"></i>
                </h1>
              </div>

              <div className="graph-title">WEEK 5</div>
            </div>
            <div className="graph">
              {makeGraph(
                this.makeWeekArray("5"),
                70,
                300,
                this.state.btnGraph5,
                0,
                this.state.selectedScore,
                14,
                "middle",
                50
              )}
            </div>
          </div>

          {/* graphbox 6 */}
          <div className="graphBox">
            <div className="graph-header">
              <div class="button-panel" onClick={this.handleSwitch}>
                <div class="button-bg" data-name="btnGraph6"></div>
                <i class="fas fa-sync-alt button-icon"></i>
                <h1 class="button-text" data-name="btnGraph6">
                  switch graph <i class="fas fa-arrow-right"></i>
                </h1>
              </div>

              <div className="graph-title">WEEK 6</div>
            </div>
            <div className="graph">
              {makeGraph(
                this.makeWeekArray("6"),
                70,
                300,
                this.state.btnGraph6,
                0,
                this.state.selectedScore,
                14,
                "middle",
                50
              )}
            </div>
          </div>
          <div className="graphBox finalBox">
            <div className="graph-header">
              <div class="button-panel" onClick={this.handleSwitch}>
                <div class="button-bg" data-name="btnGraph7"></div>
                <i class="fas fa-sync-alt button-icon"></i>
                <h1 class="button-text" data-name="btnGraph7">
                  switch graph <i class="fas fa-arrow-right"></i>
                </h1>
              </div>

              <div className="graph-title">FINAL PROJECTS</div>
            </div>
            <div className="graph">
              {makeGraph(
                this.makeProjectArray(),
                20,
                40,
                this.state.btnGraph7,
                0,
                this.state.selectedScore,
                8,
                "middle",
                50
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentSmart;
