import styles from '../Logo/Logo.module.css';
import LogoS from '../../assets/logo.png'
export const Logo = () => {
    return (
        <div className={styles.logoArea}>
            <a href="./">
                <img src={LogoS} alt="Sueli's Cleaning House Logotipe" />
            </a>
        </div>
    );

}