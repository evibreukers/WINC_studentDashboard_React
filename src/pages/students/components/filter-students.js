import React from "react";

function FilterStudents({
  studentProfileList,
  changeStudent,
  selectScore,
  currentStudent,
}) {
  return (
    <div className="select-panel">
      <div className="profileBox selectBox">
        <div className="imgBox">
          <img
            className="profile-image"
            src={currentStudent.avatar}
            alt="problem?"
          />
        </div>
        <ul className="profile">
          <span>
            <li className="profile-item">
              NAME:<p> {currentStudent.first_name}</p>
            </li>
            <li className="profile-item">
              SURNAME: <p> {currentStudent.last_name}</p>
            </li>
          </span>
          <span>
            <li className="profile-item">
              GENDER:<p> {currentStudent.gender}</p>
            </li>
            <li className="profile-item">
              E-MAIL: <p> {currentStudent.email}</p>
            </li>
          </span>
        </ul>
      </div>

      <div className="selectStudent-panel selectBox">
        <p>SELECT STUDENT</p>
        <select id="selectStudent" onChange={changeStudent}>
          {studentProfileList.map((item) => {
            return (
              <option value={item.first_name} key={item.id}>
                {item.first_name}
              </option>
            );
          })}
        </select>
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
          <label for="selectFun">all scores</label>
        </div>
        <div className="selectScore-filter ">
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

export default FilterStudents;
