import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src= { product.img|| "/noavatar.png"} alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>İsim</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Fiyat</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stok</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Renk</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
          />
          <label>Durum</label>
          <textarea
            type="text"
            name="size"
            placeholder={product.size || "size"}
          />
          <label>Kategori</label>
          <select name="cat" id="cat" defaultValue={product.cat}>
            <option value="mutfak">Mutfak</option>
            <option value="telefon">Telefon</option>
            <option value="bilgisayar">Bilgisayar</option>
          </select>
          <label>Açıklama</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={product.desc}
          ></textarea>
          <button>Güncelle</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;

