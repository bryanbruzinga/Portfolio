import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

const index = () => {
  const tecnologias = [
    {
      nome: "HTML",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    {
      nome: "CSS",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    },
    {
      nome: "Javascript",
      img: "https://tadeuesteves.files.wordpress.com/2014/01/javascript-logo.png",
    },
    {
      nome: "React",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      nome: "VueJs",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
    },
    {
      nome: "NextJs",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    },
    {
      nome: "TypeScript",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    },
    {
      nome: "Sass",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    },
    {
      nome: "Git",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    },
    {
      nome: "Bootstrap",
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    },
  ];

  return (
    <section className={styles.containerTech}>
      <h1>Tecnologias que utilizo</h1>
      <div className={styles.containerTechUsed}>
        {tecnologias.map((dados) => {
          return (
            <div key={dados.nome} className={styles.tech}>
              <Image width={50} height={50} src={dados.img} alt={dados.nome} />
              {dados.nome}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default index;
