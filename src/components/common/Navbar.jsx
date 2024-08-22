import classNames from "classnames";
import { FiGlobe, FiHome } from "react-icons/fi";
import { useFetchCategories } from "../../hooks/useFetch";
import { useEffect } from "react";
import { LuUserSquare2 } from "react-icons/lu";
import { MdOutlineAgriculture, MdOutlineHealthAndSafety, MdSportsMartialArts } from "react-icons/md";
import { TbDeviceDesktop } from "react-icons/tb";
import { IoBarChartOutline, IoGameControllerOutline } from "react-icons/io5";
import { GiMaterialsScience } from "react-icons/gi";
import { AiOutlineEnvironment } from "react-icons/ai";
import { Link } from "react-router-dom";
import { route } from "../../utils/helper";

const IconTemplate = ({slug}) => {
    const icons = {
        world: <FiGlobe/>,
        politics: <LuUserSquare2/>,
        sports: <MdSportsMartialArts/>, 
        technology: <TbDeviceDesktop/>,
        economy: <IoBarChartOutline/>, 
        entertainment: <IoGameControllerOutline/>,
        health: <MdOutlineHealthAndSafety/>,
        science: <GiMaterialsScience/>,
        culture: <MdOutlineAgriculture/>,
        environment: <AiOutlineEnvironment/>,
    }

    return icons[slug]
}

function Navbar() {

    const [categories, fetchCategories, loading] = useFetchCategories()
    
    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <nav className="pr-[17px]">
            {categories.map((menu, index) => (
                <Link to={route('search', {category: menu.slug})} key={index} className={classNames({
                    'pl-[33px] flex gap-x-[22px] h-[50px] items-center text-amberBlack': true,
                    'font-bold !text-primary bg-[#E0F0F8] rounded-r-full': menu.isActive
                })}>
                    <span className="text-[24px] w-[24px] inline-flex h-[24px] justify-center items-center">
                        <IconTemplate slug={menu.slug} />
                    </span>
                    <span className="text-[15px]">{menu.name}</span>
                </Link>
            ))}
        </nav>
    );
}

export default Navbar;