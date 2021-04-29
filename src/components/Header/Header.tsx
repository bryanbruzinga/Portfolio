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
    </header>
  );
};

export default Header;
