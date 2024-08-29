import LeftBlock from "../components/common/LeftBlock";
import Header from "../components/common/Header";
import RightBlock from "../components/common/RightBlock";
import Footer from "../components/common/Footer";
import {useEffect} from "react";
import {useStoreApp} from "stores/module/app.store.jsx";
import {serviceStoreSetDarkMode} from "services/store.service.jsx";
import useDeviceType from "hooks/useDevice.jsx";
import MobileHeader from "components/common/MobileHeader.jsx";
import {translate} from "utils/helper.jsx";

function AppLayout({ children }) {

    const {darkMode} = useStoreApp();
    const {isMobile} = useDeviceType();


    translate('menu.home');

    useEffect(() => {
        if (darkMode) {
            document.querySelector('body').classList.add('dark')
        }
        else {
            document.querySelector('body').classList.remove('dark')
        }
    }, [darkMode]);

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            const newColorScheme = event.matches ? "dark" : "light";
            serviceStoreSetDarkMode(newColorScheme === 'dark')
        });
    }, [])

    return (
        <div className="lg:grid px-5 lg:px-0 h-full lg:grid-cols-[260px_calc(100%_-_384px)] md:grid-cols-1 xl:grid-cols-[260px_calc(100%_-_669px)_285px] gap-[45px]">
            {!isMobile && <LeftBlock />}
            <div className="flex flex-col">
                {!isMobile && <Header />}
                {isMobile && <MobileHeader/>}
                <div className="flex-1">
                    {children}
                </div>
                <Footer />
            </div>
            {!isMobile && <RightBlock />}
        </div>
    );
}

export default AppLayout;