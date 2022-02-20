import { styled } from "../../../stitches.config";

export const Container = styled("main", {
  margin: "0 auto",
  width: "1100px",
  overflowX: "hidden",
  "@desktop": {
    width: "900px",
  },
  "@tablet": {
    width: "90%",
  },
  "@phone": {
    width: "100%",
    padding: "16px",
  },
  display: "flex",
  flexDirection: "column",
});

export const SBSection = styled("section", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});
