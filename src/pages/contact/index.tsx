import React from "react";
import styles from "./styles.module.scss";
import Lottie from "react-lottie";
import animationData from "../../lotties/contact-us.json";
import Link from "next/link";
import { GrLinkedinOption } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import Form from "../../components/Form/Index";
import { Fade } from 'react-reveal'

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
      <Form />
      <Fade right>  
        <div className={styles.contact}>
          <h1>Fale comigo</h1>
          <Lottie options={defaultOptions} height={400} width={400} />
          <div className={styles.containerContact}>
            <Link href="https://www.linkedin.com/in/bryan-da-silva-bruzinga-b6830960/">
              <a target="__blank">
                <GrLinkedinOption />
              </a>
            </Link>
            <Link href="https://github.com/bryanbruzinga">
              <a target="__blank">
                <FiGithub />
              </a>
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=5543984057266&text=Ol%C3%A1%20Bryan%2C%20vi%20o%20seu%20port%C3%B3lio%20e">
              <a>
                <ImWhatsapp />
              </a>
            </Link>
            <Link href="mailto:bryanbruzinga1990@gmail.com">
              <a>
                <SiGmail />
              </a>
            </Link>
          </div>
        </div>
      </Fade>    
    </section>
  );
};

export default index;
