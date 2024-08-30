import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {route, translate} from "utils/helper.jsx";
import {FiX} from "react-icons/fi";
import menus from "router/menus.jsx";
import {useFetchCategories} from "hooks/useFetch.jsx";
import useQuery from "hooks/useQuery.jsx";
import NavbarNavlink from "components/common/components/NavbarNavlink.jsx";
import classNames from "classnames";

function MobileNavbar({open, onClose}) {

    const [categories, fetchCategories, loading] = useFetchCategories()

    const {category} = useQuery();

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <div className={classNames({
            'fixed inset-0 flex overflow-hidden bg-gray-900/70 z-[999] transition-all': true,
            'opacity-0 invisible': !open
        })}>
            <div className={classNames({
                'w-[80%] h-screen overflow-hidden bg-white dark:bg-gray-800 transition-all duration-200 delay-200': true,
                '-translate-x-full': !open
            })}>
                <div className="h-[60px] border-b dark:border-b-gray-700 flex justify-between items-center px-3">
                    <Link to={route('home')}>
                        <img src="/logo.svg" alt=""/>
                    </Link>

                    <button onClick={() => onClose()} className="size-[40px] text-3xl inline-flex items-center justify-center">
                        <FiX/>
                    </button>
                </div>

                <div >
                    <div className="flex flex-col">
                        {menus.map((menu, index) => (
                            <Link to={route(menu.route)} key={index}
                                  className="inline-flex text-[18px] gap-x-[22px] dark:text-gray-300 whitespace-nowrap h-[46px] px-2 items-center">
                                <span className="text-[24px] w-[24px] inline-flex h-[24px] justify-center items-center">{menu.icon}</span>
                                <span>{translate(menu.name)}</span>
                            </Link>
                        ))}
                    </div>
                    <hr className="my-3 dark:border-gray-700"/>
                    <div className="flex flex-col">
                        {categories.map((menu, index) => (
                            <NavbarNavlink isActive={menu.slug === category} menu={menu} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileNavbar;