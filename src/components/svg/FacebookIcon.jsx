import * as React from "react";

const FacebookIcon = ({ color = "#fff", size = 1, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 25}
    height={size * 46}
    viewBox="0 0 25 46"
    fill="none"
    {...rest}
  >
    <path
      fill={color}
      d="M22.9 26.094 24.14 18h-7.765v-5.25c0-2.215 1.083-4.375 4.56-4.375h3.534v-6.89S21.264.936 18.202.936c-6.399 0-10.577 3.878-10.577 10.894V18H.515v8.094h7.11V45.66C9.052 45.885 10.512 46 12 46s2.948-.115 4.375-.34V26.095h6.524Z"
    />
  </svg>
);

export default FacebookIcon;
