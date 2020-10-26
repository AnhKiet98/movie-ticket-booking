import { USER_LOGIN } from "../../ultity/ConfigWeb";
import { DANG_NHAP, DANG_XUAT } from "../Contants/QuanLyLoginContants";

let userLocal = {};
let stateLogin = false;
if (localStorage.getItem(USER_LOGIN)) {

    userLocal = JSON.parse(localStorage.getItem(USER_LOGIN));
    stateLogin = true;
    console.log('userLocal', userLocal);
}

const initialState = {
    userLogin: userLocal,
    stateLogin: stateLogin
}

export const QuanLyLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case DANG_NHAP: {
            userLocal = action.userLogin
            state.stateLogin = action.stateLogin
            console.log('action.userLogin', action.userLogin)
            return { ...state }
        }
        case DANG_XUAT: {

            state.stateLogin = action.stateLogin
            return { ...state }
        }
        default:
            return state
    }
}
