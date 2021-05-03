import React from 'react';
import styles from './Slide.module.scss';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';

export default function Slide() {

    const images = [
        {
          image: '/project-1.png'
        },
        {
          image: '/project-2.png'
        },
        {
          image: '/project-3.png'
        }
      ]

    const [currentValue, setCurrentValue] = React.useState<number>(0)

    const nextSlide = () => {
      setCurrentValue(currentValue === images.length - 1 ? 0 : currentValue + 1)
    }
  
    const prevSlide = () => {
      setCurrentValue(currentValue === 0 ? images.length - 1 : currentValue - 1)
    }

    return (
        <section className={styles.slider}>
        {images.map((slide, index) => {
          return (
            <div key={index} className={index === currentValue ? `${styles.slide} ${styles.active}` : `${styles.slide}`}>
              <button onClick={nextSlide} className={styles.btnNext}>
                <AiOutlineArrowRight />
              </button>
              <button onClick={prevSlide} className={styles.btnPrev}>
                <AiOutlineArrowLeft />
              </button>
              {index === currentValue && (
                <img src={slide.image} alt="Projetos" className={styles.image} />
              )}              
            </div>
          )
        })}
      </section>
    )
}
