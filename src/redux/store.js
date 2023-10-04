import { createStore } from "redux";
import leftMenuReducer from "./leftMenu/left-menu-reducer";

const store = createStore(leftMenuReducer);

export default store;