const font = "'Dosis','sans-serif'";

const wincTheme = {
  area: {
    style: {
      data: {
        fill: "#212121",
      },
      labels: {
        fontFamily: font,
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
      },
    },
    width: 350,
    height: 350,
    padding: 50,
  },
  axis: {
    style: {
      axis: {
        fill: "transparent",
        stroke: "rgb(132, 161, 198)",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      axisLabel: {
        textAnchor: "middle",
        fontFamily: font,
        fontSize: 12,
        letterSpacing: "normal",
        padding: 9,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
      },
      grid: {
        fill: "none",
        stroke: "none",
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: "#90A4AE",
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      tickLabels: {
        fontFamily: font,
        fontSize: 8,
        angle: -90,
        letterSpacing: "normal",
        padding: 12,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
      },
    },
    width: 350,
    height: 350,
    padding: 50,
  },
  bar: {
    style: {
      data: {
        fill: "#4a90e2",
        padding: 0,
        strokeWidth: 0,
      },
      labels: {
        fontFamily: font,
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
      },
    },
    width: 350,
    height: 350,
    padding: 20,
  },
  chart: {
    width: 800,
    height: 300,
    padding: 50,
  },
  group: {
    colorScale: [
      "#f74ca9",
      "#f9b67d",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064",
    ],
    width: 350,
    height: 350,
    padding: 50,
  },
  legend: {
    colorScale: [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064",
    ],
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle",
      },
      labels: {
        fontFamily: font,
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "rgb(132, 161, 198)",
        stroke: "transparent",
        strokeWidth: 0,
      },
      title: {
        fontFamily: font,
        fontSize: 40,
        letterSpacing: "normal",
        padding: 5,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
      },
    },
  },
  line: {
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: "#455A64",
        strokeWidth: 4,
      },
      labels: {
        fontFamily: font,
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
      },
    },
    width: 350,
    height: 350,
    padding: 50,
  },
};

export default wincTheme;
