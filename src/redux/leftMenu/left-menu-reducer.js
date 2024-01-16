import { TOGGLE_MIN_MAX, SET_TRUE, SET_FALSE } from "./left-menu-type"

const initialState = {
    isMaximized: true 
}

const leftMenuReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_MIN_MAX: return {
            ...state,
            isMaximized: state.isMaximized === true ? false : true
        };
        case SET_TRUE: return {
            ...state,
            isMaximized: state.isMaximized !== true ? true : state.isMaximized
        };
        case SET_FALSE: return {
            ...state,
            isMaximized: state.isMaximized !== false ? false : state.isMaximized
        };
        

        default: return state;
    }
}

export default leftMenuReducer;
