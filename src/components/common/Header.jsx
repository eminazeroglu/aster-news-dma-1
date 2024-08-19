import { FiSearch } from "react-icons/fi";
import menus from "../../router/menus";
import { Link } from "react-router-dom";
import { route } from "../../utils/helper";

function Header() {
    return (
        <header className="py-[15px] flex items-center justify-between">
            <div className="bg-[#ECF5F8] flex items-center w-[400px]">
                <input type="text" placeholder="Search for news.." className="bg-transparent h-[46px] px-[8px] flex-1 outline-none placeholder:text-[#A7B9C4]" />
                <span className="inline-flex size-[46px] items-center justify-center">
                    <FiSearch/>
                </span>
            </div>
            <div className="flex">
                {menus.map((menu, index) => (
                    <Link to={route(menu.route)} key={index} className="inline-flex gap-x-2 h-[46px] px-2 items-center">
                        <span>{menu.icon}</span>
                        <span>{menu.name}</span>
                    </Link>
                ))}
            </div>
        </header>
    );
}

export default Header;