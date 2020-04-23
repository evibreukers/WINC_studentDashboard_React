import React from "react";
import wincTheme from "./wincTheme";

import {
  VictoryBar,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryTooltip,
  VictoryLabel,
  VictoryLegend,
} from "victory";

export const makeGraph = (
  array,
  offset,
  padding,
  graphtype,
  angle,
  value,
  labelSize,
  textAlign,
  bottomPadding
) => {
  var arrayLength = [];
  for (var i = 1; i <= 60; i++) {
    arrayLength.push(i);
  }

  const bar = (
    <VictoryGroup offset={offset}>
      <VictoryBar
        labelComponent={<VictoryTooltip />}
        data={array}
        x="Assignment"
        y="Difficulty"
      />
      <VictoryBar
        labelComponent={<VictoryTooltip />}
        data={array}
        x="Assignment"
        y="Fun"
      />
      <VictoryAxis
        tickValues={arrayLength}
        tickFormat={array.map((item) => item.Assignment)}
        tickLabelComponent={
          <VictoryLabel
            angle={angle}
            style={{
              fontFamily: "'Dosis','sans-serif'",
              fontSize: labelSize,
              letterSpacing: "normal",
              padding: 12,
              fill: "#455A64",
              stroke: "transparent",
              strokeWidth: 0,
              textAnchor: textAlign,
            }}
          />
        }
      />
      <VictoryAxis
        dependentAxis
        tickFormat={[1, 2, 3, 4, 5]}
        style={{ tickLabels: { fontSize: 2 } }}
      />
    </VictoryGroup>
  );

  const barDiff = (
    <VictoryGroup offset={offset}>
      <VictoryBar
        labelComponent={<VictoryTooltip />}
        data={array}
        x="Assignment"
        y="Difficulty"
      />
      <VictoryAxis
        tickValues={arrayLength}
        tickFormat={array.map((item) => item.Assignment)}
        tickLabelComponent={
          <VictoryLabel
            angle={angle}
            style={{
              fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
              fontSize: labelSize,
              letterSpacing: "normal",
              padding: 12,
              fill: "#455A64",
              stroke: "transparent",
              strokeWidth: 0,
              textAnchor: textAlign,
            }}
          />
        }
      />
      <VictoryAxis dependentAxis tickFormat={[1, 2, 3, 4, 5]} />
    </VictoryGroup>
  );

  const barFun = (
    <VictoryGroup offset={offset}>
      <VictoryBar
        labelComponent={<VictoryTooltip />}
        data={array}
        x="Assignment"
        y="Fun"
      />
      <VictoryAxis
        tickValues={arrayLength}
        tickFormat={array.map((item) => item.Assignment)}
        tickLabelComponent={
          <VictoryLabel
            angle={angle}
            style={{
              fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
              fontSize: labelSize,
              letterSpacing: "normal",
              padding: 12,
              fill: "#455A64",
              stroke: "transparent",
              strokeWidth: 0,
              textAnchor: textAlign,
            }}
          />
        }
      />
      <VictoryAxis dependentAxis tickFormat={[1, 2, 3, 4, 5]} />
    </VictoryGroup>
  );

  const line = (
    <VictoryGroup offset={offset}>
      <VictoryLine
        labelComponent={<VictoryTooltip />}
        data={array}
        x="Assignment"
        y="Difficulty"
      />
      <VictoryLine
        labelComponent={<VictoryTooltip />}
        data={array}
        x="Assignment"
        y="Fun"
      />
      <VictoryAxis
        tickValues={arrayLength}
        tickFormat={array.map((item) => item.Assignment)}
        tickLabelComponent={
          <VictoryLabel
            angle={angle}
            style={{
              fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
              fontSize: labelSize,
              letterSpacing: "normal",
              padding: 12,
              fill: "#455A64",
              stroke: "transparent",
              strokeWidth: 0,
              textAnchor: textAlign,
            }}
          />
        }
      />
      <VictoryAxis dependentAxis tickFormat={[1, 2, 3, 4, 5]} />
    </VictoryGroup>
  );

  const lineDiff = (
    <VictoryGroup offset={offset}>
      <VictoryLine
        labelComponent={<VictoryTooltip />}
        data={array}
        x="Assignment"
        y="Difficulty"
      />

      <VictoryAxis
        tickValues={arrayLength}
        tickFormat={array.map((item) => item.Assignment)}
        tickLabelComponent={
          <VictoryLabel
            angle={angle}
            style={{
              fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
              fontSize: labelSize,
              letterSpacing: "normal",
              padding: 12,
              fill: "#455A64",
              stroke: "transparent",
              strokeWidth: 0,
              textAnchor: textAlign,
            }}
          />
        }
      />
      <VictoryAxis dependentAxis tickFormat={[1, 2, 3, 4, 5]} />
    </VictoryGroup>
  );

  const lineFun = (
    <VictoryGroup offset={offset}>
      <VictoryLine
        labelComponent={<VictoryTooltip />}
        data={array}
        x="Assignment"
        y="Fun"
      />

      <VictoryAxis
        tickValues={arrayLength}
        tickFormat={array.map((item) => item.Assignment)}
        tickLabelComponent={
          <VictoryLabel
            angle={angle}
            style={{
              fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
              fontSize: labelSize,
              letterSpacing: "normal",
              padding: 12,
              fill: "#455A64",
              stroke: "transparent",
              strokeWidth: 0,
              textAnchor: textAlign,
            }}
          />
        }
      />
      <VictoryAxis dependentAxis tickFormat={[1, 2, 3, 4, 5]} />
    </VictoryGroup>
  );

  let showThisGraph;
  let showLegend;
  if (graphtype === false && value === "both") {
    showThisGraph = line;
    showLegend = [
      {
        name: "average difficulty rate",
        symbol: { fill: "f74ca9" },
      },
      { name: "average fun rate", symbol: { fill: "f9b67d" } },
    ];
  } else if (graphtype === false && value === "fun") {
    showThisGraph = lineFun;
    showLegend = [
      {
        name: "average fun rate",
        symbol: { fill: "f74ca9" },
      },
    ];
  } else if (graphtype === false && value === "diff") {
    showThisGraph = lineDiff;
    showLegend = [
      {
        name: "average difficulty rate",
        symbol: { fill: "f74ca9" },
      },
    ];
  } else if (graphtype === true && value === "both") {
    showThisGraph = bar;
    showLegend = [
      {
        name: "average difficulty rate",
        symbol: { fill: "f74ca9" },
      },
      { name: "average fun rate", symbol: { fill: "f9b67d" } },
    ];
  } else if (graphtype === true && value === "fun") {
    showThisGraph = barFun;
    showLegend = [
      {
        name: "average fun rate",
        symbol: { fill: "f74ca9" },
      },
    ];
  } else if (graphtype === true && value === "diff") {
    showThisGraph = barDiff;
    showLegend = [
      {
        name: "average difficulty rate",
        symbol: { fill: "f74ca9" },
      },
    ];
  }

  return (
    <VictoryChart
      domainPadding={{ x: padding, y: 5 }}
      padding={{ top: 20, bottom: bottomPadding, left: 50, right: 40 }}
      theme={wincTheme}
    >
      <VictoryLegend
        x={600}
        y={0}
        orientation="vertical"
        gutter={20}
        style={{ border: { stroke: "ligtblue" } }}
        data={showLegend}
      />
      {showThisGraph}
    </VictoryChart>
  );
};

export const makeGraphAssign = (
  array,
  offset,
  padding,
  graphtype,
  angle,
  selectStudents,
  value
) => {
  var arrayLength = [];
  for (var i = 1; i <= 60; i++) {
    arrayLength.push(i);
  }

  const bar = (
    <VictoryGroup offset={offset}>
      <VictoryBar
        labelComponent={<VictoryTooltip />}
        data={array}
        x="Name"
        y="Difficulty"
      />
      <VictoryBar
        labelComponent={<VictoryTooltip />}
        data={array}
        x="Name"
        y="Fun"
      />
      <VictoryAxis
        tickValues={arrayLength}
        tickFormat={selectStudents}
        tickLabelComponent={<VictoryLabel angle={angle} />}
      />
      <VictoryAxis dependentAxis tickFormat={[1, 2, 3, 4, 5]} />
    </VictoryGroup>
  );

  const barFun = (
    <VictoryGroup offset={offset}>
      <VictoryBar
        labelComponent={<VictoryTooltip />}
        data={array}
        x="Name"
        y="Fun"
      />
      <VictoryAxis
        tickValues={arrayLength}
        tickFormat={selectStudents}
        tickLabelComponent={<VictoryLabel angle={angle} />}
      />
      <VictoryAxis dependentAxis tickFormat={[1, 2, 3, 4, 5]} />
    </VictoryGroup>
  );

  const barDiff = (
    <VictoryGroup offset={offset}>
      <VictoryBar
        labelComponent={<VictoryTooltip />}
        data={array}
        x="Name"
        y="Difficulty"
      />
      <VictoryAxis
        tickValues={arrayLength}
        tickFormat={selectStudents}
        tickLabelComponent={<VictoryLabel angle={angle} />}
      />
      <VictoryAxis dependentAxis tickFormat={[1, 2, 3, 4, 5]} />
    </VictoryGroup>
  );

  const line = (
    <VictoryGroup offset={offset}>
      <VictoryLine
        labelComponent={<VictoryTooltip />}
        data={array}
        x="Name"
        y="Difficulty"
      />
      <VictoryLine
        labelComponent={<VictoryTooltip />}
        data={array}
        x="Name"
        y="Fun"
      />
      <VictoryAxis
        tickValues={arrayLength}
        tickFormat={selectStudents}
        tickLabelComponent={<VictoryLabel angle={angle} />}
      />
      <VictoryAxis dependentAxis tickFormat={[1, 2, 3, 4, 5]} />
    </VictoryGroup>
  );

  const lineFun = (
    <VictoryGroup offset={offset}>
      <VictoryLine
        labelComponent={<VictoryTooltip />}
        data={array}
        x="Name"
        y="Fun"
      />
      <VictoryAxis
        tickValues={arrayLength}
        tickFormat={selectStudents}
        tickLabelComponent={<VictoryLabel angle={angle} />}
      />
      <VictoryAxis dependentAxis tickFormat={[1, 2, 3, 4, 5]} />
    </VictoryGroup>
  );

  const lineDiff = (
    <VictoryGroup offset={offset}>
      <VictoryLine
        labelComponent={<VictoryTooltip />}
        data={array}
        x="Name"
        y="Difficulty"
      />
      <VictoryAxis
        tickValues={arrayLength}
        tickFormat={selectStudents}
        tickLabelComponent={<VictoryLabel angle={angle} />}
      />
      <VictoryAxis dependentAxis tickFormat={[1, 2, 3, 4, 5]} />
    </VictoryGroup>
  );

  let showThisGraph;
  let showLegend;
  if (graphtype === false && value === "both") {
    showThisGraph = line;
    showLegend = [
      {
        name: "average difficulty rate",
        symbol: { fill: "f74ca9" },
      },
      { name: "average fun rate", symbol: { fill: "f9b67d" } },
    ];
  } else if (graphtype === false && value === "fun") {
    showThisGraph = lineFun;
    showLegend = [
      {
        name: "average fun rate",
        symbol: { fill: "f74ca9" },
      },
    ];
  } else if (graphtype === false && value === "diff") {
    showThisGraph = lineDiff;
    showLegend = [
      {
        name: "average difficulty rate",
        symbol: { fill: "f74ca9" },
      },
    ];
  } else if (graphtype === true && value === "both") {
    showThisGraph = bar;
    showLegend = [
      {
        name: "average difficulty rate",
        symbol: { fill: "f74ca9" },
      },
      { name: "average fun rate", symbol: { fill: "f9b67d" } },
    ];
  } else if (graphtype === true && value === "fun") {
    showThisGraph = barFun;
    showLegend = [
      {
        name: "average fun rate",
        symbol: { fill: "f74ca9" },
      },
    ];
  } else if (graphtype === true && value === "diff") {
    showThisGraph = barDiff;
    showLegend = [
      {
        name: "average difficulty rate",
        symbol: { fill: "f74ca9" },
      },
    ];
  }

  return (
    <VictoryChart
      domainPadding={{ x: padding, y: 5 }}
      padding={{ top: 20, bottom: 60, left: 50, right: 40 }}
      theme={wincTheme}
    >
      <VictoryLegend
        x={600}
        y={0}
        orientation="vertical"
        gutter={20}
        style={{ border: { stroke: "ligtblue" } }}
        data={showLegend}
      />
      {showThisGraph}
    </VictoryChart>
  );
};
