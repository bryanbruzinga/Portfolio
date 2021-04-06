import Link from "next/link";
import React from "react";
import styles from "./HeaderBody.module.css";

const HeaderBody = () => {
  return (
    <div className={styles.titleGroup}>
      <h1 className={styles.title}>Bryan da Silva Bruzinga</h1>
      <h2 className={styles.subtitle}>Desenvolvedor Front-End</h2>
      <Link href="/projetos">Veja meus projetos</Link>
    </div>
  );
};

export default HeaderBody;
