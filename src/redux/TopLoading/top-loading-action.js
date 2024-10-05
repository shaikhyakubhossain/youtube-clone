import { TOGGLE_TOP_LOADING, SET_TOP_LOADING_TRUE, SET_TOP_LOADING_FALSE } from "./top-loading-type"


export const toggleTopLoading = () => {
    return {
        type: TOGGLE_TOP_LOADING
    };
};

export const setTopLoadingTrue = () => {
    return {
        type: SET_TOP_LOADING_TRUE
    };
};

export const setTopLoadingFalse = () => {
    return {
        type: SET_TOP_LOADING_FALSE
    };
};