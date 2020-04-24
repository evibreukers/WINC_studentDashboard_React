import React from "react";

function FilterDash({ selectScore, handleSort }) {
  return (
    <div className="select-panel">
      <div className="selectScore-panel selectBox">
        <p>SELECT SCORES</p>
        <div className="selectScore-filter">
          <input
            type="radio"
            name="selectedScore"
            value="both"
            onClick={selectScore}
          />
          <label for="selectFun">All scores</label>
        </div>
        <div className="selectScore-filter">
          <input
            type="radio"
            name="selectedScore"
            value="diff"
            onClick={selectScore}
          />
          <label for="selectDiff">Difficulty scores</label>
        </div>
        <div className="selectScore-filter">
          <input
            type="radio"
            name="selectedScore"
            value="fun"
            onClick={selectScore}
          />
          <label for="selectFun">Fun scores</label>
        </div>
      </div>

      <div className="sortBy-panel selectBox">
        <p>SORT BY</p>
        <div className="sortBy-filter">
          <select id="selectStudent" onChange={handleSort}>
            <option value="default">Default</option>
            <option value="funas">Fun ↑</option>
            <option value="funde">Fun ↓</option>
            <option value="diffas">Difficulty ↑</option>
            <option value="diffde">Difficulty ↓</option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default FilterDash;
