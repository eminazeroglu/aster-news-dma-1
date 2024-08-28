import {FiHome, FiLogOut, FiPhone, FiUser} from "react-icons/fi";

const menus = [
    {
        route: 'home',
        name: 'Ana səhifə',
        icon: <FiHome/>,
        isShow: true
    },
    {
        route: 'about',
        name: 'Haqqımızda',
        icon: <FiUser/>,
        isShow: true
    },
    {
        route: 'contact',
        name: 'Əlaqə',
        icon: <FiPhone/>,
        isShow: true
    }
];

export default menus;

export const profileMenus = [
    { route: 'profile', name: 'Profilim', icon: <FiUser /> },
    { key: 'logout', name: 'Logout', icon: <FiLogOut /> },
]