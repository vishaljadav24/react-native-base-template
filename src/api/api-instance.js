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
        data: response.data.data !== undefined ? response.data.data : null,
        pagination: response.data.pagination !== undefined ? response.data.pagination : null
    };
    console.log("response :: ", dataResponse);
    return Promise.resolve(dataResponse);
}, (error) => {
    let errorResponse = {
        status: error.response !== undefined ? error.response.status : ResponseCode.INTERNAL_SERVER_ERROR,
        meta: error.response.data.meta !== undefined ? error.response.data.meta : undefined,
        data: error.response.data.data !== undefined ? error.response.data.data : undefined,
    };
    console.log("error :: ", errorResponse);
    switch (errorResponse.status) {
        case ResponseCode.NOT_FOUND:
            // showSnackBar(errorResponse.meta !== undefined ? errorResponse.meta.message : "Sorry, Not Found");
            break;
        case ResponseCode.BAD_GATEWAY:
            // showSnackBar(errorResponse.meta !== undefined ? errorResponse.meta.message : "Something went wrong.Please try again.");
            break;
        case ResponseCode.INTERNAL_SERVER_ERROR:
            // showSnackBar(errorResponse.meta !== undefined ? errorResponse.meta.message : "Server Error. Please try again.");
            break;
        case ResponseCode.TOKEN_INVALID:
            store.dispatch(logout());
            DeviceEventEmitter.emit(notificationKey.LOGOUT, {});
            // showSnackBar(errorResponse.meta !== undefined ? errorResponse.meta.message : "Server Error. Please try again.");
            break;
    }
    return Promise.reject(errorResponse);
});

export {
    axiosInstance
};