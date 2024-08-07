import styles from "./Footer.module.css";
import FacebookIcon from "./svg/FacebookIcon";
import InstagramIcon from "./svg/InstagramIcon";
import TwitterIcon from "./svg/TwitterIcon";
import logo from "../images/ccc-logo.webp";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.social}>
          <a href="https://www.instagram.com/corkclimbingclub/" target="_blank">
            <InstagramIcon size={1} />
          </a>
          <a href="https://www.facebook.com/corkclimbingclub" target="_blank">
            <FacebookIcon size={1} />
          </a>
        </div>
        <div className={styles.legal}>
          Copyright © {new Date().getFullYear()} Cork Climbing Club <br /> All
          rights reserved
        </div>
      </div>
      <div>
        <a href="/" className={styles["logo-wrapper"]}>
          <img src={logo.src} alt="Cork Climbing Club logo" />
        </a>
      </div>
      <div className={styles.join}>
        <div>Interested in becoming a member?</div>
        <Button>Join us</Button>
      </div>
    </footer>
  );
}
