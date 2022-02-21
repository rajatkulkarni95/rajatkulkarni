import React from "react";
import { keyframes } from "@stitches/react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { styled } from "../../../stitches.config";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const TooltipContent = styled(TooltipPrimitive.Content, {
  borderRadius: "4px",
  padding: "8px 16px",
  fontSize: "12px",
  lineHeight: 1,
  color: "$secondaryText",
  backgroundColor: "$tooltipBg",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "250ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: "$tooltipBg",
});

// Exports
export const Provider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

type Props = {
  children: React.ReactNode;
  tooltip: string;
  side?: "left" | "right" | "bottom" | "top";
};

const TooltipProvider = ({ children, tooltip, side = "bottom" }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent sideOffset={5} side={side}>
        {tooltip}
        <StyledArrow />
      </TooltipContent>
    </Tooltip>
  );
};

export default TooltipProvider;
