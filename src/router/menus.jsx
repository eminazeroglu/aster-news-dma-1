import { FiHome, FiPhone, FiUser } from "react-icons/fi";

const menus = [
    {
        route: 'home',
        name: 'Ana səhifə',
        icon: <FiHome/>
    },
    {
        route: 'about',
        name: 'Haqqımızda',
        icon: <FiUser/>
    },
    {
        route: 'contact',
        name: 'Əlaqə',
        icon: <FiPhone/>
    }
];

export default menus;