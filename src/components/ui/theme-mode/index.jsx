import React, {useEffect} from 'react';
import {IoMoonOutline} from "react-icons/io5";
import {useStoreApp} from "stores/module/app.store.jsx";
import {MdOutlineWbSunny} from "react-icons/md";
import {serviceStoreSetDarkMode} from "services/store.service.jsx";

function ThemeMode(props) {

    const {darkMode} = useStoreApp();

    const handleClick = () => {
        serviceStoreSetDarkMode(!darkMode)
    }

    return (
        <button onClick={() => handleClick()} className="flex text-sm items-center h-[40px] mr-4 pr-4 border-r dark:border-gray-700">
            <span className="inline-flex size-[24px] text-[22px] items-center">
                {darkMode ? <MdOutlineWbSunny/> : <IoMoonOutline/>}
            </span>
        </button>
    );
}

export default ThemeMode;