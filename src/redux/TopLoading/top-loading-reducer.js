import { TOGGLE_TOP_LOADING, SET_TOP_LOADING_TRUE, SET_TOP_LOADING_FALSE } from "./top-loading-type"

const initialState = {
    showLoading: false 
}

const topLoadingReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_TOP_LOADING: return {
            ...state,
            showLoading: state.showLoading === true ? false : true
        };
        case SET_TOP_LOADING_TRUE: return {
            ...state,
            showLoading: state.showLoading !== true ? true : state.showLoading
        };
        case SET_TOP_LOADING_FALSE: return {
            ...state,
            showLoading: state.showLoading !== false ? false : state.showLoading
        };
        

        default: return state;
    }
}

export default topLoadingReducer;
