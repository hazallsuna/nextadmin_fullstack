import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Son İşlem</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Ad</td>
            <td>Durum</td>
            <td>Tarih</td>
            <td>Tutar</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Ali Yılmaz
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Askıda
              </span>
            </td>
            <td>14.02.2024</td>
            <td>₺3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Ayşe Altun
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Yapıldı
              </span>
            </td>
            <td>20.05.2024</td>
            <td>₺3.300</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Ahmet Güney
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                İptal
              </span>
            </td>
            <td>05.01.2024</td>
            <td>₺3.000</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Ayça Şen
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Askıda
              </span>
            </td>
            <td>15.03.2024</td>
            <td>₺4.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;