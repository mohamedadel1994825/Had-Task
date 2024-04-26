import { AXIOS_TIMEOUT, baseUrl } from "@common";
import { translate } from "@language";
import { default as Axios } from "axios";
import { Alert } from "react-native";

const instance = Axios.create({
    baseURL: baseUrl,
    timeout: AXIOS_TIMEOUT,
});

instance.interceptors.request.use(
    async (config) => {
        try {
            config.headers.Accept = "application/json";
            config.headers["Content-Type"] = "application/json";
        } catch (error) {
            Alert.alert(translate('server_error'))
            return Promise.reject(error)
        }
        return config;
    },
    (err) => {
        return Promise.reject(err)
    }
);

instance.interceptors.response.use(
    async (response) => response,
    (err) => {
        return Promise.reject(err)
    }
);

export default instance;
