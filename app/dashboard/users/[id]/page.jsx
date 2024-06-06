import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { fetchUser } from "@/app/lib/data";
import { updateUser } from "@/app/lib/actions";

const SingleUserPage = async ({ params }) => {
  
    const { id } = params;
    const user = await fetchUser(id);

    console.log(user)
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={user.img || "/noavatar.png"}alt="" fill />
                </div>
                {user.username}
            </div>
            <div className={styles.formContainer}>
                <form action={updateUser} className={styles.form}>
                    <input type="hidden" name="id" value={user.id} />
                    <label>Kullanıcı Adı</label>
                    <input type ="text" name ="username" placeholder={user.username}/>
                    <label>Email</label>
                    <input type ="email" name ="email" placeholder=
                    {user.email} />
                    <label>Şifre</label>
                    <input type ="password" name ="password" />
                    <label>Telefon</label>
                    <input type ="text" name ="phone" placeholder={user.phone} />
                    <label>Adres</label>
                    <input type ="text" name ="address" placeholder={user.address} />
                    <label>Admin mi?</label>
                    <select name="isAdmin" id="isAdmin">
                <   option value={true} selected={user.isAdmin}
                >Evet</option>
                <option value={false}
                selected={!user.isAdmin}>Hayır</option>
                </select>
                <label>Aktif mi?</label>
                <select name="isActive" id="isActive">
                <option value={true} selected={user.isActive}>Evet</option>
                <option value={false}  selected={!user.isActive}>Hayır</option>
                </select>
                <button>
                    Güncelle
                </button>
                </form>
            </div>
        </div>
        
    );
};

export default SingleUserPage;
