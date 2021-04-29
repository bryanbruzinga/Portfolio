import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">Sobre mim</Link>
          </li>
          <li>
            <Link href="/projects">Projetos</Link>
          </li>
          <li>
            <Link href="/techs">Tecnologias</Link>
          </li>
          <li>
            <Link href="/contact">Entre em contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
