import React from 'react';
import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  const [menuMobile, setMenuMobile] = React.useState<boolean>(false)
  
  function toggleMenu() {
    setMenuMobile(!menuMobile)
  }

  return (
    <header className={styles.headerContainer}>
      <nav>
        <button onClick={toggleMenu} className={menuMobile && styles.active}></button>
        <ul className={menuMobile && `${styles.menuMobile}`}>
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
