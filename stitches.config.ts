import { createStitches } from "@stitches/react";
import {
  amberDark,
  grassDark,
  grayDark,
  red,
  violet,
  amber,
} from "@radix-ui/colors";

export const { styled, getCssText, createTheme } = createStitches({
  media: {
    phone: `(width < 720px)`,
    tablet: `(720px <= width < 1024px)`,
    desktop: `(1024px <= width < 1536px)`,
    wide: `(1920 <= width)`,
    invertedTablet: `(720px <= height <= 900px)`,
  },
  theme: {
    fonts: {
      sans: "'Sora', sans-serif",
      cursive: "'Covered By Your Grace', cursive",
    },
    colors: {
      background: grayDark.gray1,
      primaryText: grayDark.gray12,
      secondaryText: grayDark.gray11,
      header: amberDark.amber10,
      tagline: grassDark.grass9,
      clean: red.red10,
      strokeFill: violet.violet11,
      linkHover: grayDark.gray8,
      selection: amber.amber10,
    },
  },
});
