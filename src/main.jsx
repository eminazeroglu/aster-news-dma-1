import "./assets/css/index.css"
import { createRoot } from 'react-dom/client'
import { RouterProvider, createHashRouter } from "react-router-dom";
import router from "./router/router";
import { Provider } from "react-redux";
import stores from "./stores";

createRoot(document.getElementById('root')).render(
    <Provider store={stores}>
        <RouterProvider router={createHashRouter(router)} />
    </Provider>
)
