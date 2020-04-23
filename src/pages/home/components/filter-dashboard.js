import React from "react";

function FilterDash({ selectScore }) {
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
          <label for="selectFun">all scores</label>
        </div>
        <div className="selectScore-filter">
          <input
            type="radio"
            name="selectedScore"
            value="diff"
            onClick={selectScore}
          />
          <label for="selectDiff">difficulty scores</label>
        </div>
        <div className="selectScore-filter">
          <input
            type="radio"
            name="selectedScore"
            value="fun"
            onClick={selectScore}
          />
          <label for="selectFun">fun scores</label>
        </div>
      </div>
    </div>
  );
}
export default FilterDash;
