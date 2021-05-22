import React from 'react';
import Link from "next/link";
import styles from "./styles.module.scss";
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => {
  const [menuMobile, setMenuMobile] = React.useState<boolean>(false)
  const ref = React.useRef()
  
  function toggleMenu() {
    setMenuMobile(!menuMobile)
  }

  return (
    <header className={styles.headerContainer}>
      <nav>
        <button onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
        <ul ref={ref} className={menuMobile ? `${styles.active}` : ''}>
          <li onClick={toggleMenu}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/about">Sobre mim</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/projects">Projetos</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/techs">Tecnologias</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/contact">Entre em contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
