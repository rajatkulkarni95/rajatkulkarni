import type { NextPage } from "next";
import { styled } from "../../stitches.config";
import { Container, HyperLink, SBSection } from "@styles/Common";
import SocialButtons from "@components/SocialButtons";

const Home: NextPage = () => {
  return (
    <Container>
      <Title>Rajat Kulkarni</Title>
      <TagLine>
        UI focused <Special>Product Engineer</Special> with a passion for making
        clean, accessible and&nbsp;
        <Paint>Beautiful experiences</Paint>
      </TagLine>
      <SBSection
        css={{
          marginTop: "150px",
          "@phone": {
            marginTop: "40px",
            flexDirection: "column-reverse",
            alignItems: "flex-start",
          },
        }}
      >
        <HyperLink href="mailto:rajatkulkarni95@gmail.com">
          rajatkulkarni95@gmail.com
        </HyperLink>
        <SocialButtons />
      </SBSection>
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

  "@invertedTablet": {
    marginTop: "60px",
  },

  "@tablet": {
    marginTop: "96px",
  },

  "@phone": {
    marginTop: "56px",
    fontSize: "16px",
  },
});

const TagLine = styled("p", {
  fontSize: "56px",
  fontWeight: 700,
  // lineHeight: "80px",
  marginTop: "64px",

  "@tablet": {
    fontSize: "40px",
  },

  "@phone": {
    fontSize: "32px",
    marginTop: "48px",
  },
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
  margin: "0 8px",

  "@phone": {
    display: "inline-block",
    width: "100%",
  },
});

export default Home;
