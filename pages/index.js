import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import HeaderBody from "../components/Header/HeaderBody";
import Projects from "../components/Projects";
import Techs from "../components/Techs";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Header />
        <HeaderBody />
        <About />
        <Projects />
        <Techs />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
