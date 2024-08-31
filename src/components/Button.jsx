import styles from "./Button.module.css";

export default function Button({
  children,
  tagName = "button",
  secondary = false,
  className = "",
  ...props
}) {
  const ButtonTag = tagName;

  return (
    <ButtonTag
      className={`${styles.button} ${
        secondary ? styles.secondary : ""
      } ${className}`}
      {...props}
    >
      {children}
    </ButtonTag>
  );
}
