import styles from "./Button.module.css";

export default function Button({ children }) {
  return <button style={styles.button}>{children}</button>;
}
