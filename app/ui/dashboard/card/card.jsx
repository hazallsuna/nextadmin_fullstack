import { MdSupervisedUserCircle } from "react-icons/md";
import styles from './card.module.css'

const Card = () => {
    return(
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Toplam Kullanıcı</span>
        <span className={styles.number}>10.273</span>
        
        <span className={styles.detail}>
            <span className={styles.positive}>12% önceki haftadan daha fazla</span> 
        </span>
        </div>
        </div>
    )
}

export default Card