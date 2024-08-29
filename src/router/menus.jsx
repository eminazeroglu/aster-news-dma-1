import {FiHome, FiLogOut, FiPhone, FiUser} from "react-icons/fi";

const menus = [
    {
        route: 'home',
        name: 'menu.home',
        icon: <FiHome/>,
        isShow: true
    },
    {
        route: 'about',
        name: 'menu.about',
        icon: <FiUser/>,
        isShow: true
    },
    {
        route: 'contact',
        name: 'menu.contact',
        icon: <FiPhone/>,
        isShow: true
    }
];

export default menus;

export const profileMenus = [
    { route: 'profile', name: 'Profilim', icon: <FiUser /> },
    { key: 'logout', name: 'Logout', icon: <FiLogOut /> },
]