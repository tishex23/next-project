import Image from 'next/image'
import styles from './postcard.module.css'
import Link from 'next/link'

export default function PostCard() {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image 
                src="https://images.pexels.com/photos/19882774/pexels-photo-19882774/free-photo-of-woman-sitting-on-the-wall-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt='' fill className={styles.img} 
                />
            </div>
            <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Desc</p>
            <Link className={styles.link} href='/blog/post'>Read More</Link>
        </div>
    </div>
  )
}
