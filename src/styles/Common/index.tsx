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
    padding: "16px 32px",
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

export const HyperLink = styled("a", {
  fontSize: "18px",
  fontWeight: 500,
  color: "$secondaryText",
  textDecoration: "inherit",
  borderBottom: "2px solid $linkHover",
  cursor: "pointer",
  padding: "0 4px",
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px",

  "&:hover": {
    background: "$linkHover",
    transitionDuration: "0.2s",
  },

  "@phone": {
    fontSize: "14px",
  },
});

export const FlexColumn = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const AlignCenter = styled("div", {
  display: "flex",
  alignItems: "center",
});
