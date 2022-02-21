import TooltipProvider from "@components/Tooltip";
import { styled } from "../../../../stitches.config";

export const IconButton = styled("button", {
  cursor: "pointer",
  padding: "4px",
  borderRadius: "4px",
  background: "transparent",
  transition: "0.2s",
  border: "none",
  textDecoration: "none",
  fontSize: "24px",
  color: "$primaryText",
  display: "flex",
  height: "fit-content",
  "&:hover": {
    background: "$tooltipBg",
  },

  "&:focus": {
    outlineStyle: "solid",
    outlineWidth: "2px",
    outlineColor: "$outline",
  },

  variants: {
    spacing: {
      sm: {
        margin: "0 8px",
      },
      md: {
        margin: "0 16px",
      },
      lg: {
        margin: "0 24px",
      },
    },
  },
});

type Props = {
  tooltip: string;
  side?: "left" | "top" | "bottom" | "right";
  as?: "a" | "button";
  icon: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
  spacing?: "sm" | "md" | "lg";
};

export const ClickableIcon = ({
  as,
  icon,
  tooltip,
  side,
  onClick,
  href,
  spacing,
}: Props) => {
  return (
    <TooltipProvider tooltip={tooltip} side={side}>
      <IconButton
        as={as}
        onClick={onClick}
        href={href}
        spacing={spacing}
        aria-label={tooltip}
      >
        {icon}
      </IconButton>
    </TooltipProvider>
  );
};
