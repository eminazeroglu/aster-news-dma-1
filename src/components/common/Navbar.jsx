import classNames from "classnames";
import { FiGlobe, FiHome } from "react-icons/fi";

function Navbar() {

    const menus = [
        {
            icon: <FiHome />,
            name: 'Top Stories',
            isActive: true,
        },
        {
            icon: <FiGlobe />,
            name: 'Around the World'
        }
    ]

    return (
        <nav className="pr-[17px]">
            {menus.map((menu, index) => (
                <a href="#" key={index} className={classNames({
                    'pl-[33px] flex gap-x-[22px] h-[50px] items-center text-amberBlack': true,
                    'font-bold !text-primary bg-[#E0F0F8] rounded-r-full': menu.isActive
                })}>
                    <span className="text-[24px] w-[24px] inline-flex h-[24px] justify-center items-center">{menu.icon}</span>
                    <span className="text-[15px]">{menu.name}</span>
                </a>
            ))}
        </nav>
    );
}

export default Navbar;