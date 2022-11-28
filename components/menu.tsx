import styles from './styles.module.css';
export default function Menu() {
  return (

      <div className="flex absolute z-50 left-0 top-5 flex-row flex-wrap md:justify-center space-x-1 mx-auto justify-center md:space-x-5 lg:space-x-20 pt-2 w-full pb-4">
        <p className={`${styles.menucard}`}>
          Home
        </p>
        <p className={`${styles.menucard}`}>
          About Us
        </p>
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