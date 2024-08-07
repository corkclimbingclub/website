import * as React from "react";

const BurgerIcon = ({ color = "#FAFAFA", size = 1, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 48}
    height={size * 37}
    viewBox="0 0 48 37"
    fill="none"
    {...rest}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={5}
      d="M45 3H3M45 19H3M45 34H3"
    />
  </svg>
);

export default BurgerIcon;
