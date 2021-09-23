import { styled } from "../../../configs/stitches.config";

export const Button = styled("button", {
  backgroundColor: "transparent",
  appearance: "none",
  border: "none",
  borderRadius: "$3",
  padding: "10px",
  cursor: "pointer",
  width: "100%",

  variants: {
    color: {
      primary: {
        backgroundColor: "$primary-50",
        "&:hover": {
          backgroundColor: "$primary-70",
        },
      },
      secondary: {
        backgroundColor: "$secondary-50",
        color: "white",
        "&:hover": {
          backgroundColor: "$secondary-70",
        },
      },
    },
    outlined: {
      true: {
        $$shadowColor: "transparent",
        backgroundColor: "transparent",
        boxShadow: "0 0 0 1px $$shadowColor",
      },
    },
  },

  defaultVariants: {
    color: "primary",
  },

  compoundVariants: [
    {
      color: "purple",
      outlined: true,
      css: {
        $$shadowColor: "DarkViolet",
        color: "BlueViolet",
        "&:hover": {
          color: "white",
          backgroundColor: "DarkViolet",
        },
      },
    },
    {
      color: "gray",
      outlined: true,
      css: {
        $$shadowColor: "Gainsboro",
      },
    },
  ],
});
