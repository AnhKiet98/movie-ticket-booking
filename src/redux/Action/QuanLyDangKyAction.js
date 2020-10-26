import Axios from "axios"
import { DANG_KY } from '../Contants/QuanLyLoginContants'
import { DOMAIN, TOKEN, USER_LOGIN } from '../../ultity/ConfigWeb'
export const dangKiApiAction = (userRegistration, history, stateLogin) => {
    console.log(userRegistration)
    return async dispatch => {
        try {
            let { data, status } = await Axios(
                {
                    url: DOMAIN + '/api/QuanLyNguoiDung/DangKy',
                    method: 'post',
                    data: {
                        taiKhoan: userRegistration.taiKhoan,
                        matKhau: userRegistration.matKhau,
                        email: userRegistration.email,
                        soDt: userRegistration.soDt,
                        maNhom: "GP01",
                        maLoaiNguoiDung: "KhacHang",
                        hoTen: userRegistration.hoTen
                    }
                }
            )
            if (status === 200) {
                alert("thanhcong")
                console.log(userRegistration)
            }
        }
        catch (err) {
            console.log(err.response.data)
            alert(err.response.data);
        }
    }
}