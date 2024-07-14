import * as React from "react";

const CloseIcon = ({ color = "#fff", size = 1, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 36}
    height={size * 36}
    viewBox="0 0 36 36"
    fill="none"
    {...rest}
  >
    <path
      fill={color}
      d="M3.6 36 0 32.4 14.4 18 0 3.6 3.6 0 18 14.4 32.4 0 36 3.6 21.6 18 36 32.4 32.4 36 18 21.6 3.6 36Z"
    />
  </svg>
);

export default CloseIcon;
