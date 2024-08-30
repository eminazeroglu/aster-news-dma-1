import React, {useEffect, useState} from 'react';
import Breadcrumb from "components/ui/breadcrumb/index.jsx";
import menus from "router/menus.jsx";
import routers from "router/router.jsx";
import {useLocation} from "react-router-dom";
import {translate} from "utils/helper.jsx";

function Page({title, children}) {

    const {pathname} = useLocation();
    const [currentMenu, setCurrentMenu] = useState();

    const getCurrentMenu = () => {
        const findRoute = routers.find(i => i.path === pathname);
        if (findRoute) {
            const findMenu = menus.find(i => i.route === findRoute.name)
            if (findMenu) {
                setCurrentMenu(findMenu)
            }
        }
    }

    useEffect(() => {
        getCurrentMenu()
    }, [pathname]);

    return (
        <div>
            <div>
                <div className="mb-2">
                    <h4 className="font-bold text-xl">{currentMenu?.name && translate(currentMenu?.name)}</h4>
                </div>

                <Breadcrumb
                    items={[
                        {name: translate(currentMenu?.name)}
                    ]}
                />
            </div>

            <div className="pt-4">
                {children}
            </div>
        </div>
    );
}

export default Page;