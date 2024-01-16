import { TOGGLE_MIN_MAX, SET_TRUE, SET_FALSE } from "./left-menu-type";

export const toggleMinMax = () => {
    return {
        type: TOGGLE_MIN_MAX
    };
};

export const setTrue = () => {
    return {
        type: SET_TRUE
    };
};

export const setFalse = () => {
    return {
        type: SET_FALSE
    };
};
