import PostCard from "@/components/postcard/PostCard";
import styles from './blog.module.css'

export default function BlogPage() {
  return (
    <div className={styles.container}> 
      <div className={styles.post}>
       <PostCard />
      </div>
      <div className={styles.post}>
       <PostCard />
      </div>
      <div className={styles.post}>
       <PostCard />
      </div>
      <div className={styles.post}>
       <PostCard />
      </div>
    </div>
  )
}
