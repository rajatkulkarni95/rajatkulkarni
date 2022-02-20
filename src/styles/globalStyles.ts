import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  html: {
    minWidth: "360px",
    scrollBehavior: "smooth",
  },
  body: {
    fontFamily: "$sans",
    background: "$background",
    color: "$primaryText",

    "::selection": {
      color: "#FFFFFF",
      background: "$selection",
    },
  },
});
