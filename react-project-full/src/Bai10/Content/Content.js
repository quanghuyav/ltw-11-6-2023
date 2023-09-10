import styles from './style.module.css';
function Content() {
    console.log(styles);
    return (
        <>
            <h1 className={[styles.title, styles.header].join(' ')}>Content</h1>
            <h2>Nội dung...</h2>
        </>
    );
}

export default Content;
