import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Hazal Dev</div>
            <div className={styles.text} 
            >© Tüm haklar gizlidir.
            </div>

        </div>
    );
};

export default Footer;
