import styles from './style.module.css';
import clsx from 'clsx';
function Header() {
    return (
        <>
            <h1 className={`${styles.title} ${styles.redColor}`}>Header</h1>
            <h2 className={clsx(styles.title, { [styles.redColor]: false })}>tên bài học</h2>
        </>
    );
}

export default Header;
