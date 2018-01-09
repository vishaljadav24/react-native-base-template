import axios from 'axios';
import store from 'src/redux/store';
import {
    DeviceEventEmitter,
} from 'react-native';
import {notificationKey} from 'src/utils/constants';
import {logout} from "src/redux/action";
import {ResponseCode} from "src/utils/constants";


let axiosInstance = axios.create({
    baseURL: "baseUrl",
    timeout: 15000
});
store.subscribe(listener);

// add default token in authenticate apis
function listener() {
    if (store.getState() !== undefined) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${store.getState().token}`;
    }
}

// return request config or request error
axiosInstance.interceptors.request.use(
    async (config) => {
        return config;
    },
    error => Promise.reject(error)
);

// user axios interceptors for change response and error as we want
axiosInstance.interceptors.response.use((response) => {
    let dataResponse = {
        status: response.status,
        meta: response.data.meta,
        data: response.data.data ? response.data.data : null,
    };
    console.log("response :: ", dataResponse);
    return Promise.resolve(dataResponse);
}, (error) => {
    let errorResponse = {
        status: error.response ? error.response.status : ResponseCode.INTERNAL_SERVER_ERROR,
        meta: error.response.data.meta ? error.response.data.meta : undefined,
        data: error.response.data.data ? error.response.data.data : undefined,
    };
    console.log("error :: ", errorResponse);
    switch (errorResponse.status) {
        case ResponseCode.NOT_FOUND:
           // handle api url not found
            break;
        case ResponseCode.BAD_GATEWAY:
            // handle something went wrong with server
            break;
        case ResponseCode.INTERNAL_SERVER_ERROR:
            // handle server error
        case ResponseCode.TOKEN_INVALID:
        // handle token invalid (here logout user from app if token invalid)
            store.dispatch(logout());
            DeviceEventEmitter.emit(notificationKey.LOGOUT, {});
            break;
    }
    return Promise.reject(errorResponse);
});

export {
    axiosInstance
};