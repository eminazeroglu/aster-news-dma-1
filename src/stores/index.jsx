import { configureStore } from "@reduxjs/toolkit";
import appStore from "./module/app.store";
import authStore from "./module/auth.store";

const stores = configureStore({
    reducer: {
        appStore,
        authStore
    }
})

export default stores;