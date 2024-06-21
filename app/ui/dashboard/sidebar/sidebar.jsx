import styles from "./sidebar.module.css"
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
  } from "react-icons/md";
  import { auth, signOut } from "@/app/auth";

const menuItems = [
    {
      title: "",
      list: [
        {
          title: "Kontrol Panel",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Kullanıcılar",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Ürünler",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        
      ],
    },
    {
      title: "",
      list: [
        {
          title: "Maliyet",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Rapor",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        
      ],
    },
    {
      title: "",
      list: [
        {
          title: "Ayarlar",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Yardım",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];

  const Sidebar = async () => {
    const { user } = await auth();
    return (
      <div className={styles.container}>
        <div className={styles.user}>
          <Image
            className={styles.userImage}
            src={user.img || "/noavatar.png"}
            alt=""
            width="50"
            height="50"
          />
          <div className={styles.userDetail}>
            <span className={styles.username}>{user.username}</span>
            <span className={styles.userTitle}>Admin</span>
          </div>
        </div>
  
           <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
          <span className={styles.cat}>{cat.title}</span>
          {cat.list.map((item) => (
            <MenuLink item={item} key={item.title} />
          ))}
        </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Çıkış 
        </button>
      </form>
         </div>
    );
};

export default Sidebar