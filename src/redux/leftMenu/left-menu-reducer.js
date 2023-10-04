import { TOGGLE_MIN_MAX } from "./left-menu-type"

const initialState = {
    isMaximized: true 
}

const leftMenuReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_MIN_MAX: return {
            ...state,
            isMaximized: state.isMaximized === true ? false : true
        };

        default: return state;
    }
}

export default leftMenuReducer;
