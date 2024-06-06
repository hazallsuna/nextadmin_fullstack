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

const Sidebar = () => {
    return(
         <div className={styles.container}>
            <div className={styles.user}>
            <Image className={styles.userImage}
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.username}>
            <span className={styles.username}>Hazal Suna</span>
            <span className={styles.userTitle}>Yönetici</span>
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
      <button className={styles.logout}>
        <MdLogout/>
        Logout
      </button>
         </div>
    );
};

export default Sidebar