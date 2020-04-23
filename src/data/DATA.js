import rawDataScores from "./RAW_SCORE_DATA.json";
import rawNewStudent from "./RAW_NEW_STUDENT.json";

export const scoreData = rawDataScores.map((item) => {
  delete item.FIELD5;
  delete item.FIELD6;
  if (item.Assignment.length > 6) {
    item.Project = true;
  } else {
    item.Project = false;
  }
  item.Assignment = item.Assignment.replace(" - Project -", "");
  return item;
});

export const newStudentData = rawNewStudent.map((item) => {
  if (item.Assignment.length > 6) {
    item.Project = true;
  } else {
    item.Project = false;
  }
  return item;
});
