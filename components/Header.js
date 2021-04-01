import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navHeader}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Quem sou eu?</Link>
          </li>
          <li>
            <Link href="/projetos">Projetos</Link>
          </li>
          <li>
            <Link href="/">Tecnologias</Link>
          </li>
          <li>
            <Link href="/">Entre em contato</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.titleGroup}>
        <h1 className={styles.title}>Bryan da Silva Bruzinga</h1>
        <h2 className={styles.subtitle}>Desenvolvedor Front-End</h2>
        <Link href="/projetos">Veja meus projetos</Link>
      </div>
    </header>
  );
};

export default Header;
