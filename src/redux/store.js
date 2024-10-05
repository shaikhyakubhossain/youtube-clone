import { createStore, combineReducers } from "redux";
import leftMenuReducer from "./leftMenu/left-menu-reducer";
import topLoadingReducer from "./TopLoading/top-loading-reducer";

const store = createStore(combineReducers({
    leftMenu: leftMenuReducer,
    topLoading: topLoadingReducer
}));

export default store;