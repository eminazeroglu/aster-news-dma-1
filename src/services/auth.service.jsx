import UserApi from "../api/user.api";
import { API } from "../utils/api"
import { serviceStoreSetToken, serviceStoreSetUser } from "./store.service";

export const serviceAuthLogin = async (data) => {
    try {
        const res = await API.post(UserApi.login, data);
        serviceStoreSetToken(res.token)
        serviceStoreSetUser(res.user)
        window.location.reload();
    }
    catch(e) {
        return false;
    }
}