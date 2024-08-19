import { FiHome, FiPhone, FiUser } from "react-icons/fi";

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