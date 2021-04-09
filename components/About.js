import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section>
      <div>
        <h2>Um pouco sobre mim</h2>
        <p>
          Sou um profissional em transição de carreira que após perambular
          perdido por outras áreas, se descobriu como um desenvolvedor.
        </p>
        <p>
          Adoro o ramo do desenvolvimento e como o mesmo nunca tem fim, pois
          sempre tem algo novo para aprender e facilitar seu trabalho.
        </p>
        <p>
          Adoro fazer trabalhos atraentes (mesmo que eu seja uma negação como
          designer rsrs) e que possam ser úteis de alguma maneira à comunidade e
          usuários.
        </p>
      </div>
      <Link href="/">Conheça meus projetos</Link>
    </section>
  );
};

export default About;
