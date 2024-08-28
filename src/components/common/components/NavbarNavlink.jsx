import { Link } from "react-router-dom";
import { route } from "../../../utils/helper";
import classNames from "classnames";
import { LuUserSquare2 } from "react-icons/lu";
import { MdOutlineAgriculture, MdOutlineHealthAndSafety, MdSportsMartialArts } from "react-icons/md";
import { TbDeviceDesktop } from "react-icons/tb";
import { IoBarChartOutline, IoGameControllerOutline } from "react-icons/io5";
import { GiMaterialsScience } from "react-icons/gi";
import { AiOutlineEnvironment } from "react-icons/ai";
import { FiGlobe, FiHome } from "react-icons/fi";
import Skeleton from "../../ui/skeleton";

const IconTemplate = ({ slug }) => {
    const icons = {
        world: <FiGlobe />,
        politics: <LuUserSquare2 />,
        sports: <MdSportsMartialArts />,
        technology: <TbDeviceDesktop />,
        economy: <IoBarChartOutline />,
        entertainment: <IoGameControllerOutline />,
        health: <MdOutlineHealthAndSafety />,
        science: <GiMaterialsScience />,
        culture: <MdOutlineAgriculture />,
        environment: <AiOutlineEnvironment />,
    }

    return icons[slug]
}

function NavbarNavlink({ menu = {}, isActive = false, skeleton = false }) {
    return (
        <Link to={route('search', { category: menu.slug })} className={classNames({
            'lg:pl-[33px] pl-[10px] flex gap-x-[22px] h-[50px] items-center text-amberBlack dark:text-gray-300': true,
            'font-bold !text-primary bg-[#E0F0F8] dark:bg-gray-700 dark:!text-white rounded-r-full': isActive
        })}>
            <span className="text-[24px] w-[24px] inline-flex h-[24px] justify-center items-center">
                {skeleton ? (
                    <Skeleton className="size-[24px]" />
                ) : <IconTemplate slug={menu.slug} />}
            </span>
            <span className="text-[18px] md:text-[15px] flex-1">
                { skeleton ? <Skeleton className="h-[15px] w-full"/> : menu.name }
            </span>
        </Link>
    );
}

export default NavbarNavlink;