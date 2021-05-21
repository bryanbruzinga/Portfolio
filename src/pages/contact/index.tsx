import React from "react";
import styles from "./styles.module.scss";
import Lottie from "react-lottie";
import animationData from "../../lotties/contact-us.json";
import Link from "next/link";
import { GrLinkedinOption } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
import { SiGmail } from "react-icons/si";

type dados = {
  id: string;
  link: string;
  description: string;
  src: string;
};

const index = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className={styles.sectionContact}>
      <h1>Fale comigo</h1>
      <div className={styles.contact}>
        <Lottie options={defaultOptions} height={400} width={400} />
        <div className={styles.containerContact}>
          <Link href="https://www.linkedin.com/in/bryan-da-silva-bruzinga-b6830960/">
            <a>
              <GrLinkedinOption />
            </a>
          </Link>
          <Link href="https://github.com/bryanbruzinga">
            <a>
              <FiGithub />
            </a>
          </Link>
          <Link href="">
            <a>
              <ImWhatsapp />
            </a>
          </Link>
          <Link href="">
            <a>
              <SiGmail />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default index;
