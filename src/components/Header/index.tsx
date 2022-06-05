import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const router = useRouter();
  const [menuMobile, setMenuMobile] = useState(false);

  function toggleMenu() {
    setMenuMobile(!menuMobile);
  }

  return (
    <header className={styles.headerContainer}>
      <nav>
        <button onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
        <ul className={menuMobile ? `${styles.active}` : ""}>
          <li onClick={toggleMenu}>
            <Link href="/">
              <a className={router.pathname === "/" ? styles.active : ""}>
                Home
              </a>
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/about">
              <a className={router.pathname === "/about" ? styles.active : ""}>
                Sobre mim
              </a>
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/projects">
              <a
                className={router.pathname === "/projects" ? styles.active : ""}
              >
                Projetos
              </a>
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/techs">
              <a className={router.pathname === "/techs" ? styles.active : ""}>
                Tecnologias
              </a>
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/contact">
              <a
                className={router.pathname === "/contact" ? styles.active : ""}
              >
                Entre em contato
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
