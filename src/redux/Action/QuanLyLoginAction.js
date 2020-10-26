import Axios from "axios"
import {DANG_NHAP} from '../Contants/QuanLyLoginContants'
import { DOMAIN, TOKEN, USER_LOGIN } from '../../ultity/ConfigWeb'
export const dangNhapApiAction = (userLogin,history,stateLogin) => {
    console.log(userLogin)
    return async dispatch => {
        try {
            let { data, status } = await Axios(
                {
                    url: DOMAIN + '/api/quanlynguoidung/dangnhap',
                    method: 'post',
                    data: {
                        taiKhoan: userLogin.userName,
                        matKhau: userLogin.passWord
                    }
                }
            )
            if (status === 200) {
                stateLogin=true;
                const action={
                    type:DANG_NHAP,
                    userLogin:data,
                    stateLogin:stateLogin
                }
                dispatch(action);
                localStorage.setItem(USER_LOGIN,JSON.stringify(data));
                localStorage.setItem(TOKEN,data.accessToken)
                history.replace('/home');
            }
        }
        catch(err) {
            console.log(err.response.data)
            alert(err.response.data);
        }
    }
}