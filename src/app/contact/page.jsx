import Image from 'next/image'
import styles from './contact.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image priority={true} className={styles.img} src="/contact.png" alt='contact page' fill />
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="email" placeholder="Phone number (Optional)" />
            <textarea cols={30} rows={10} placeholder="Message..."></textarea>
            <button>send</button>
          </form>
        </div>
    </div>
  )
}
