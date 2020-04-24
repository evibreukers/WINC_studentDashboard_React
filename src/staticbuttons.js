import React from "react";

function StaticButtons() {
  return (
    <button
      className="filterSmallScreen"
      onClick={(event) => {
        if (event.target.innerHTML === "+ FILTER") {
          document
            .querySelectorAll(".select-panel")
            .forEach((panel) => (panel.style.display = "flex"));
          event.target.innerHTML = "- FILTER";
        } else {
          document
            .querySelectorAll(".select-panel")
            .forEach((panel) => (panel.style.display = "none"));
          event.target.innerHTML = "+ FILTER";
        }
      }}
    >
      - FILTER
    </button>
  );
}

export default StaticButtons;
