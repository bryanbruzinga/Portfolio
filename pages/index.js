import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Header />
        <Footer />
      </div>
    </div>
  );
}
