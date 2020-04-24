import React from "react";

function FilterAssignments({
  selectWeek,
  studentProfileList,
  selectStudent,
  selectAll,
  selectScore,
}) {
  return (
    <div className="select-panel">
      <div className="selectWeek-panel selectBox">
        <p>SELECT WEEK</p>
        <div className="select-style">
          <select id="selectStudent" onChange={selectWeek}>
            <option value="week1">week1</option>
            <option value="week2">week2</option>
            <option value="week3">week3</option>
            <option value="week4">week4</option>
            <option value="week5">week5</option>
            <option value="week6">week6</option>
          </select>
        </div>
      </div>

      <div className="selectStudent-panel selectBox">
        <p>SELECT STUDENT</p>
        <button onClick={selectAll}>SHOW ALL STUDENTS</button>

        <div className="selectStudent-filter">
          {studentProfileList.map((item) => {
            return (
              <div className="selectStudent-item" key={item.id}>
                <input
                  type="checkbox"
                  name={item.first_name}
                  value={item.first_name}
                  onClick={selectStudent}
                />
                <label htmlFor={item.first_name}>{item.first_name}</label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="selectScore-panel selectBox">
        <p>SELECT SCORES</p>
        <div className="selectScore-filter">
          <input
            type="radio"
            name="selectedScore"
            value="both"
            onClick={selectScore}
          />
          <label htmlFor="selectFun">all scores</label>
        </div>
        <div className="selectScore-filter">
          <input
            type="radio"
            name="selectedScore"
            value="diff"
            onClick={selectScore}
          />
          <label htmlFor="selectDiff">difficulty scores</label>
        </div>
        <div className="selectScore-filter">
          <input
            type="radio"
            name="selectedScore"
            value="fun"
            onClick={selectScore}
          />
          <label htmlFor="selectFun">fun scores</label>
        </div>
      </div>
    </div>
  );
}

export default FilterAssignments;
