import styles from './styles.module.css';
export default function Menu() {
  return (

      <div className="flex absolute z-20 top-5 flex-row justify-center space-x-20 pt-2 w-full pb-4">
        <p className={`${styles.menucard}`}>
          Home
        </p>
        <p className={`${styles.menucard}`}>
          About Us
        </p>
        <p className={`${styles.menucard}`}>
          Origins
        </p>
        <p className={`${styles.menucard}`}>
          Collaborations
        </p>
        <p className={`${styles.menucard}`}>
            Contact
        </p>
      </div>
  );
}