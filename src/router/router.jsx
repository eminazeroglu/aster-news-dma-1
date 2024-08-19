import { createBrowserRouter } from 'react-router-dom'
import Home from "@/pages/Home";
import About from "@/pages/About";
import View from "@/pages/View";
import Contact from "@/pages/Contact";
import Search from "@/pages/Search";
import AppLayout from '../layouts/AppLayout';
import DefaultLayout from '../layouts/DefaultLayout';

const routers = [
    {
        path: "/",
        name: 'home',
        element: <Home />,
        layout: 'app'
    },
    {
        path: "about",
        name: 'about',
        element: <About />
    },
    {
        path: "view/:slug",
        name: 'view',
        element: <View />,
        layout: 'app'
    },
    {
        path: "search",
        name: 'search',
        element: <Search />,
    },
    {
        path: "contact",
        name: 'contact',
        element: <Contact />,
    },
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

    return router;
})

export default routerMap(routers)