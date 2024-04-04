import Image from "next/image"
import styles from './about.module.css'

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>About Agency</h2>
        <h1 className={styles.subTitle}>We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p className={styles.desc}>We are a creative agency focused on helping brands grow and succeed. We work with brands, agencies, and companies from all over the world.</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about page"  width={500} height={500} />
      </div>
    </div>
  )
}
