import Link from 'next/link';
import styles from './styles.module.css';
export default function Menu() {
  return (

      <div className="flex absolute z-50 left-0 top-5 flex-row flex-wrap md:justify-center space-x-1 mx-auto justify-center md:space-x-5 lg:space-x-20 md:pt-2 w-full pb-4">
        <Link  className={`${styles.menucard}`} href="/" passHref>
          Home
        </Link >
        <Link className={`${styles.menucard}`} href="/about-us" passHref>
          About Us
        </Link>
        <p className={`${styles.menucard}`}>
          Services
        </p>
        <p className={`${styles.menucard}`}>
          Projects
        </p>
        <p className={`${styles.menucard}`}>
            Contact
        </p>
      </div>
  );
}