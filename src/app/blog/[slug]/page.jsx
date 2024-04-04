import Image from 'next/image'
import styles from './single.module.css'

export default function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
        src="https://images.pexels.com/photos/19882774/pexels-photo-19882774/free-photo-of-woman-sitting-on-the-wall-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=''
        fill
        className={styles.img}
        quality={75}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.details}>
          <Image 
            className={styles.avatar}
            alt=''
            src="https://images.pexels.com/photos/19882774/pexels-photo-19882774/free-photo-of-woman-sitting-on-the-wall-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <p className={styles.content}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, ullam? Quidem hic aperiam laborum harum quibusdam dicta quia, deserunt, voluptas provident aliquam nostrum culpa maxime saepe! Ratione aspernatur laudantium expedita
        </p>
      </div>
    </div>
  )
}
