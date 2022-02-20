import type { NextPage } from "next";
import { styled } from "../../stitches.config";
import { Container, SBSection } from "../styles/Common";

const Home: NextPage = () => {
  return (
    <Container>
      <Title>Rajat Kulkarni</Title>
      <TagLine>
        UI focused <Special>Product Engineer</Special> with a passion for
        making&nbsp;
        <Special type="clean">clean</Special>, accessible and&nbsp;
        <Paint>Beautiful</Paint> experiences.
      </TagLine>
      <SBSection></SBSection>
    </Container>
  );
};

const Title = styled("h1", {
  fontSize: "24px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.055em",
  color: "$header",
  marginTop: "180px",
});

const TagLine = styled("p", {
  fontSize: "56px",
  fontWeight: 700,
  lineHeight: "80px",
  marginTop: "64px",
});

const Special = styled("span", {
  color: "$tagline",

  variants: {
    type: {
      clean: {
        color: "$clean",
      },
    },
  },
});

const Paint = styled("span", {
  fontFamily: "$cursive",
  fontWeight: 400,
  textTransform: "uppercase",
  "-webkit-text-stroke-width": "14px",
  "-webkit-text-stroke-color": "#5746AF",
  paintOrder: "stroke fill",
});

export default Home;
