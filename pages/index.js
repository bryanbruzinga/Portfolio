import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import HeaderBody from "../components/Header/HeaderBody";
import HeaderProjects from "../components/Header/HeaderProjects";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Header />
        <div className={styles.containerMain}>
          <HeaderBody />
          <HeaderProjects />
        </div>
        <Footer />
      </div>
    </div>
  );
}
