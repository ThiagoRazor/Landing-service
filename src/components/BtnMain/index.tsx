import styles from '../BtnMain/BtnMain.module.css';

export const BtnMain = () => {
    return (
        <div className={styles.btnArea}>
            <a href='./Booking'>
                <div className={styles.btnM}>
                    Book now
                </div>
            </a>
        </div>
    );
}
