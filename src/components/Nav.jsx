import React, { useState } from "react";
import styles from "./Nav.module.css";
import BurgerIcon from "./svg/BurgerIcon";
import CloseIcon from "./svg/CloseIcon";
import Button from "./Button";
import logo from "../images/ccc-logo.webp";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <a href="/" className={styles["logo-wrapper"]}>
        <img src={logo.src} alt="Cork Climbing Club logo" />
      </a>
      <div id={styles["nav-icon-wrapper"]}>
        {isOpen ? (
          <CloseIcon
            size={0.75}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        ) : (
          <BurgerIcon
            size={0.75}
            onClick={() => {
              setIsOpen(true);
            }}
          />
        )}
      </div>
      <div className={`${styles["nav-links-wrapper"]} ${isOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact Us</a>
        <Button id="become-member">Become a Member</Button>
      </div>
    </nav>
  );
}