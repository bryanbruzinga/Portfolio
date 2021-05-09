import Header from "../components/Header";
import "../styles/global.scss";
import styles from '../styles/app.module.scss';
import {motion} from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
          pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1
          }
        }}>
          <Component {...pageProps} />
        </motion.div>
      </main>      
    </div>
    
  )
}

export default MyApp;
