import styles from "@/app/ui/login/login.module.css";
import { authenticate } from "../lib/actions";

const LoginPage = () => {

  
  return (
    <div className={styles.container}>
      <form action={authenticate} className={styles.form}>
        <h1>Giriş Yap</h1>
        <input type="text" placeholder="kullanıcıadı" name="username" />
        <input type="password" placeholder="şifre" name="password" />
        <button type="submit">Giriş</button>
      </form>
    </div>
  );
};

export default LoginPage;