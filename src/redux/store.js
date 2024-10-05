import { createStore, combineReducers } from "redux";
import leftMenuReducer from "./leftMenu/left-menu-reducer";
import topLoadingReducer from "./TopLoading/top-loading-reducer";

const rootReducer = combineReducers({
    leftMenu: leftMenuReducer,
    topLoading: topLoadingReducer
});

const store = createStore(rootReducer);

export default store;