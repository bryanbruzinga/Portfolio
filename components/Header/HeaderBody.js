import Link from "next/link";
import React from "react";
import styles from "./HeaderBody.module.css";

const HeaderBody = () => {
  return (
    <div className={styles.container}>
      <h2>Olá, eu sou</h2>
      <h1 className={styles.title}>Bryan da Silva Bruzinga</h1>
      <h2 className={styles.subtitle}>Desenvolvedor Front-End</h2>
      <Link
        className={styles.githubLink}
        href="https://github.com/bryanbruzinga"
        target="_blank"
      >
        Meu Github
      </Link>
    </div>
  );
};

export default HeaderBody;
