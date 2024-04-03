
import styles from './links.module.css';
import Navlink from "./navLink/Navlink";

export default function Links() {

    const links = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Contact',
            path: '/contact'
        },
        {
            name: 'Blog',
            path: '/blog'
        }
    ];

    const session = true;
    const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map(link => (
          <Navlink item={link} />
      ))}
      {session ? (
        <>
         {isAdmin && <Navlink item={{ name: 'Admin', path: '/admin' }} />}
         <button className={styles.logout}>Logout</button> 
        </>
      ) : (
          <Navlink item={{name: 'Login', path: '/login'}} />
      )}
    </div>
  )
}
