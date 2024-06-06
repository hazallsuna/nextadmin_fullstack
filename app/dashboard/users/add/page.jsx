import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="kullanıcıadı" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="password" placeholder="şifre" name="password" required />
        <input type="phone" placeholder="telefon" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Admin mi?</option>
          <option value={true}>Evet</option>
          <option value={false}>Hayır</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Aktif mi?</option>
          <option value={true}>Evet</option>
          <option value={false}>Hayır</option>
        </select>
        <textarea name="address" id="address" rows="16" placeholder="Adres"></textarea>
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
};

export default AddUserPage;
