import {SUB_NAV_ACTIONS} from "./action.types";


export const changeTab = tab =>({
    type : SUB_NAV_ACTIONS.CHANGE_TAB,
    payload : tab
});