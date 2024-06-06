import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                Iphone
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>İsim</label>
                    <input type="text" placeholder="isim" name="isim" />
                    <label>Fiyat</label>
                    <input type="number" placeholder="fiyat" name="fiyat" />
                    <label>Renk</label>
                    <input type="text" placeholder="renk" name="renk" />
                    <label>Stok</label>
                    <input type="number" placeholder="stok" name="stok" />
                    <label>Durum</label>
                  <textarea
                   type="text" placeholder="durum" name="durum" 
                  />
                  <label>Kategori</label>
                  <select name="cat" id="cat">
                  <option value="kitchen">Mutfak</option>
                 <option value="phone">Telefon</option>
                 <option value="computer">Bilgisayar</option>
                 </select>
                 <label>Açıklama</label>
                 <textarea
                 name="desc"
                 id="desc"
                 rows="10"
                 placeholder="Açıklama"
              ></textarea>
               <button>Güncelle</button>
                 </form>
            </div>
        </div>
        
    );
};

export default SingleProductPage;
