import React, {useEffect, useState} from 'react';
import {FiLogIn, FiMenu, FiSearch} from "react-icons/fi";
import {Link, useLocation} from "react-router-dom";
import {route} from "utils/helper.jsx";
import ThemeMode from "components/ui/theme-mode/index.jsx";
import MobileNavbar from "components/common/MobileNavbar.jsx";
import useQuery from "hooks/useQuery.jsx";
import {useModalContext} from "contexts/ModalContext.jsx";
import {useStoreAuth} from "stores/module/auth.store.jsx";
import Dropdown from "components/ui/dropdown/index.jsx";
import {profileMenus} from "router/menus.jsx";

function MobileHeader(props) {

    const {handleModal } = useModalContext();
    const {category} = useQuery();
    const {pathname} = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false)
    const {token, user} = useStoreAuth();

    const handleLogin = () => {
        handleModal('login', true)
    }

    useEffect(() => {
        if (mobileOpen) {
            document.querySelector('body').classList.add('overflow-hidden');
        }
        else {
            document.querySelector('body').classList.remove('overflow-hidden');
        }
    }, [mobileOpen]);

    const handeClick = (key) => {
        if (key === 'logout') {
            localStorage.removeItem('token')
            window.location.reload()
        }
    }

    useEffect(() => {
        setMobileOpen(false)
    }, [pathname, category])

    return (
        <div className="p-2 h-[70px]">
            <header className="fixed flex items-center justify-between top-0 left-0 right-0 bg-white dark:bg-gray-800 dark:border-b-gray-700 p-2 z-[50] border-b shadow-theme">
                <button onClick={() => setMobileOpen(true)} className="size-10 text-2xl inline-flex justify-center items-center">
                    <FiMenu/>
                </button>
                <Link to={route('home')}>
                    <img src="/logo.svg" alt=""/>
                </Link>

                <div className="flex items-center gap-x-3">
                    <ThemeMode/>
                    <button className="size-10 text-2xl inline-flex justify-center items-center">
                        <FiSearch/>
                    </button>
                    {!token && (
                        <button onClick={() => handleLogin()} className="size-10 text-2xl inline-flex justify-center items-center">
                            <FiLogIn/>
                        </button>
                    )}
                    {token && (
                        <Dropdown
                            position={'right'}
                            btnRender={
                                <div className="flex items-center gap-x-2">
                                    <figure className="size-[30px] rounded-full overflow-hidden">
                                        <img className="size-full object-cover" src={user.photo} alt="" />
                                    </figure>
                                </div>
                            }
                        >
                            {profileMenus.map((menu, index) => (
                                <Link
                                    key={index}
                                    to={menu.route ? route(menu.route) : false}
                                    onClick={menu.key ? () => handeClick(menu.key) : false}
                                    className="flex text-sm items-center h-[40px] gap-x-2"
                                >
                                    <span className="inline-flex size-[24px] text-[18px] items-center">{menu.icon}</span>
                                    <span>{menu.name}</span>
                                </Link>
                            ))}
                        </Dropdown>
                    )}
                </div>
            </header>


            <MobileNavbar
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
            />
        </div>
    );
}

export default MobileHeader;