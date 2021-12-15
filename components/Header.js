import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css";
import Link from "next/dist/client/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand_box}>
        <Navbar />
      </div>

      <div className={styles.text_box}>
        <h1 className={styles.heading_primary}>
          <span className={styles.heading_primary_main}>
            Welcome To Deqode Shop
          </span>
        </h1>
        <Link href="/blog">
        <a
          className={`${styles.btn} ${styles.btn_white} ${styles.btn_animated}`}>
          Today’s Deals
        </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
