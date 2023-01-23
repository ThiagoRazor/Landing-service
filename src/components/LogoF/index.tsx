import styles from '../LogoF/LogoF.module.css';
import LogoS from '../../assets/logo.png'
export const LogoF = () => {
    return (
        <div className={styles.logoArea}>
            <a href="./">
                <img src={LogoS} alt="Sueli's Cleaning House Logotipe" />
            </a>
        </div>
    );

}