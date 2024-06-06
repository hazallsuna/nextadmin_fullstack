import { addProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="isim" name="title" required />
        <input type="number" placeholder="fiyat" name="price" required />
        <input type="number" placeholder="stok" name="stock" required />
        <input type="text" placeholder="renk" name="color" />
        <input type="text" placeholder="durum" name="size" />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Açıklama"
        ></textarea>
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
};

export default AddProductPage;
