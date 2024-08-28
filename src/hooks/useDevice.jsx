import {useEffect, useState} from "react";

const hasTouchScreen = () => {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
};

const getDeviceType = () => {
    if (navigator.userAgentData) {
        return navigator.userAgentData.mobile ? "mobile" : "desktop";
    }

    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    if (
        /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)
    ) {
        return "mobile";
    }
    return "desktop";
};

const getDeviceTypeByScreenSize = () => {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 480) {
        return "mobile";
    } else if (width < 768) {
        return "large-mobile";
    } else if (width < 1024) {
        return "tablet";
    } else {
        return "desktop";
    }
};

const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState(() => {
        const uaDeviceType = getDeviceType();
        const sizeDeviceType = getDeviceTypeByScreenSize();
        const isTouchDevice = hasTouchScreen();

        if (uaDeviceType !== sizeDeviceType) {
            return isTouchDevice ? (sizeDeviceType === "desktop" ? "tablet" : sizeDeviceType) : uaDeviceType;
        }
        return uaDeviceType;
    });

    useEffect(() => {
        const handleResize = () => {
            setDeviceType(prevType => {
                const uaDeviceType = getDeviceType();
                const sizeDeviceType = getDeviceTypeByScreenSize();
                const isTouchDevice = hasTouchScreen();

                if (uaDeviceType !== sizeDeviceType) {
                    return isTouchDevice ? (sizeDeviceType === "desktop" ? "tablet" : sizeDeviceType) : uaDeviceType;
                }
                return uaDeviceType;
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        isMobile: deviceType === 'mobile',
        isTablet: deviceType === 'tablet',
        isDesktop: deviceType === 'desktop',
    };
};

export default useDeviceType;