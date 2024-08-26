import Home from "pages/Home.jsx";
import About from "pages/About.jsx";
import View from "pages/View.jsx";
import Search from "pages/Search.jsx";
import Contact from "pages/Contact.jsx";
import Author from "pages/Author.jsx";
import Profile from "pages/Profile.jsx";
import NotFound from "pages/NotFound.jsx";
import AppLayout from "layouts/AppLayout.jsx";
import DefaultLayout from "layouts/DefaultLayout.jsx";
import AuthProvider from "providers/AuthProvider.jsx";
import {ModalContextProvider} from "contexts/ModalContext.jsx";
import ModalProvider from "providers/ModalProvider.jsx";


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
        path: "/author/:slug",
        name: 'author',
        element: <Author />,
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
        element: <NotFound />
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

    router.element = (
        <ModalContextProvider>
            <ModalProvider>{router.element}</ModalProvider>
        </ModalContextProvider>
    )

    return router;
})

export default routerMap(routers)