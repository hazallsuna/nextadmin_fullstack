import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
    return(
        <div className={styles.container}>
         <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}> Hazır 🔥</span>
          <h3 className={styles.title}>
          Yönetici kontrol panelinin yeni sürümü nasıl kullanılır?

          </h3>
          <span className={styles.subtitle}>Öğrenmek için 4 dakika yeterli.</span>
          <p className={styles.desc}>
           Siz de bu deneyimi yaşamak istiyorsanız hemen şuan izleyin.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            İzle
          </button>
        </div>
        </div>
        <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}> Çok Yakında 🚀 </span>
          <h3 className={styles.title}>
          Yeni sunucu eylemleri mevcut, kısmi ön sürüm çok yakında geliyor.
          </h3>
          <span className={styles.subtitle}>Üretkenliğinizi artırın.</span>
          <p className={styles.desc}>
           Siz de yeni bilgiler öğrenmek istiyorsanız aşağıdaki butona tıklayın.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Öğren
          </button>
        </div>
      </div>
        </div>
    )
}

export default Rightbar