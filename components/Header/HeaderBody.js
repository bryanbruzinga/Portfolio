import Link from "next/link";
import React from "react";
import styles from "./HeaderBody.module.css";

const HeaderBody = () => {
  return (
    <section className={styles.container}>
      <div className={styles.presentation}>
        <div className={styles.name}>
          <h2>Olá, eu sou</h2>
          <h1>Bryan da Silva Bruzinga</h1>
          <h2>Desenvolvedor Front-End</h2>
        </div>
        <Link href="https://github.com/bryanbruzinga">
          <a>
            <img src="github.svg" alt="Github" />
          </a>
        </Link>
      </div>
      <div>
        <img className={styles.img} src="arch.png" alt="image" />
      </div>
    </section>
  );
};

export default HeaderBody;
