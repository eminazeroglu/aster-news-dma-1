import "./assets/css/index.css"
import 'react-toastify/dist/ReactToastify.css';
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import router from "./router/router";
import {Provider} from "react-redux";
import stores from "./stores";
import {ToastContainer} from 'react-toastify';

createRoot(document.getElementById('root')).render(
    <Provider store={stores}>
        <RouterProvider router={createBrowserRouter(router)} />
        <ToastContainer/>
    </Provider>
)
