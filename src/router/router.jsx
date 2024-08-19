import { createBrowserRouter, Navigate } from 'react-router-dom'
import Home from "@/pages/Home";
import About from "@/pages/About";
import View from "@/pages/View";
import Contact from "@/pages/Contact";
import Search from "@/pages/Search";
import AppLayout from '../layouts/AppLayout';
import DefaultLayout from '../layouts/DefaultLayout';
import Profile from '../pages/Profile';
import AuthProvider from '../providers/AuthProvider';
import { route } from '../utils/helper';
import NotFound from '../pages/NotFound';

const routers = [
    {
        path: "/",
        name: 'home',
        element: <Home />,
        layout: 'app'
    },
    {
        path: "/about",
        name: 'about',
        element: <About />,
        layout: 'app'
    },
    {
        path: "/view/:slug",
        name: 'view',
        element: <View />,
        layout: 'app'
    },
    {
        path: "/search",
        name: 'search',
        element: <Search />,
        layout: 'app'
    },
    {
        path: "/contact",
        name: 'contact',
        element: <Contact />,
        layout: 'app'
    },
    {
        path: "/profile",
        name: 'profile',
        layout: 'app',
        auth: true,
        element: <Profile />,
    },
    {
        path: '*',
        layout: 'app',
        element: <NotFound/>
    }
];

const routerMap = (routers) => routers.map(router => {
    
    if (router.layout) {
        if (router.layout === 'app') {
            router.element = <AppLayout>{router.element}</AppLayout>
        }
    }
    else {
        router.element = <DefaultLayout>{router.element}</DefaultLayout>
    }

    if (router.auth) {
        router.element = <AuthProvider>{router.element}</AuthProvider>
    }

    return router;
})

export default routerMap(routers)