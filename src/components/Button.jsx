import styles from "./Button.module.css";

export default function Button({ children, secondary = false }) {
  return (
    <button className={secondary ? styles.secondary : ""} style={styles.button}>
      {children}
    </button>
  );
}
