import React from "react";
import { makeGraph } from "../../../makeGraph";
import FilterDash from "./filter-dashboard";

class DashboardUI extends React.Component {
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
      btnGraph8: true,
      selectedScore: "both",
    };
  }

  /* make array of projects */
  makeProjectArray = () => {
    const newArray = this.props.averageScores.filter(
      (item) => item.Project === true
    );
    return newArray;
  };

  /* make array of scores per week */
  makeWeekArray = (weekNum) => {
    const newArray = [];
    this.props.averageScores.forEach((item) => {
      if (item.Week === weekNum && !item.Project) {
        newArray.push(item);
      }
    });
    return newArray;
  };

  selectScore = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSwitch = (event) => {
    const thisGraph = event.target.name;
    this.setState({ [thisGraph]: !this.state[thisGraph] });
  };

  render() {
    return (
      <div className="dashboardWrapper">
        <h1 className="dashboard-titel">DASHBOARD OVERVIEW</h1>

        <FilterDash selectScore={this.selectScore} />

        {/* graphbox 1 */}
        <div className="graphBox overview">
          <div className="graph-titel">OVERVIEW ALL ASSIGNMENTS</div>
          <button onClick={this.handleSwitch} name="btnGraph1">
            SWITCH GRAPH
          </button>
          <div className="graph">
            <div>
              {makeGraph(
                this.props.averageScores,
                3,
                40,
                this.state.btnGraph1,
                -90,
                this.state.selectedScore,
                6,
                "end",
                90
              )}
            </div>
          </div>
        </div>

        <div className="graphGrid">
          {/* graphbox 3 */}
          <div className="graphBox">
            <div className="graph-titel">WEEK1</div>
            <button onClick={this.handleSwitch} name="btnGraph3">
              SWITCH GRAPH
            </button>
            <div className="graph">
              {makeGraph(
                this.makeWeekArray("1"),
                15,
                40,
                this.state.btnGraph3,
                0,
                this.state.selectedScore,
                15,
                "middle",
                50
              )}
            </div>
          </div>

          {/* graphbox 4 */}
          <div className="graphBox">
            <div className="graph-titel">WEEK2</div>
            <button onClick={this.handleSwitch} name="btnGraph4">
              SWITCH GRAPH
            </button>
            <div className="graph">
              {makeGraph(
                this.makeWeekArray("2"),
                15,
                40,
                this.state.btnGraph4,
                0,
                this.state.selectedScore,
                15,
                "middle",
                50
              )}
            </div>
          </div>

          {/* graphbox 5*/}
          <div className="graphBox">
            <div className="graph-titel">WEEK3</div>
            <button onClick={this.handleSwitch} name="btnGraph5">
              SWITCH GRAPH
            </button>
            <div className="graph">
              {makeGraph(
                this.makeWeekArray("3"),
                15,
                40,
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
            <div className="graph-titel"></div>
            <button onClick={this.handleSwitch} name="btnGraph6">
              SWITCH GRAPH
            </button>
            <div className="graph">
              {makeGraph(
                this.makeWeekArray("4"),
                15,
                40,
                this.state.btnGraph6,
                0,
                this.state.selectedScore,
                15,
                "middle",
                50
              )}
            </div>
          </div>

          {/* graphbox 7*/}
          <div className="graphBox">
            <div className="graph-titel">WEEK5</div>
            <button onClick={this.handleSwitch} name="btnGraph7">
              SWITCH GRAPH
            </button>
            <div className="graph">
              {makeGraph(
                this.makeWeekArray("5"),
                100,
                100,
                this.state.btnGraph7,
                0,
                this.state.selectedScore,
                16,
                "middle",
                50
              )}
            </div>
          </div>

          {/* graphbox 8 */}
          <div className="graphBox">
            <div className="graph-titel">WEEK6</div>
            <button onClick={this.handleSwitch} name="btnGraph8">
              SWITCH GRAPH
            </button>
            <div className="graph">
              {makeGraph(
                this.makeWeekArray("6"),
                70,
                300,
                this.state.btnGraph8,
                0,
                this.state.selectedScore,
                16,
                "middle",
                50
              )}
            </div>
          </div>

          {/* graphbox 2 */}
          <div className="graphBox finalBox">
            <div className="graph-titel">FINAL PROJECTS</div>
            <button onClick={this.handleSwitch} name="btnGraph2">
              SWITCH GRAPH
            </button>
            <div className="graph">
              {makeGraph(
                this.makeProjectArray(),
                20,
                40,
                this.state.btnGraph2,
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

export default DashboardUI;
