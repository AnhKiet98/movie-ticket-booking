import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DANG_XUAT } from '../../redux/Contants/QuanLyLoginContants'
import { TOKEN, USER_LOGIN } from '../../ultity/ConfigWeb'
import Login from '../../pages/Login/Login'
import Modal from '../Modal/Modal'
import Registration from '../../pages/Registration/Registration'
export default function Header() {
    const { userLogin, stateLogin } = useSelector(state => state.QuanLyLoginReducer);
    let dispatch = useDispatch()
    // const {data}=login.picture;
    console.log('userLogin', userLogin)
    console.log('stateLogin', stateLogin)
    function UserGreeting(props, stateLogin) {
        return <div className="lastLogin">
            {/* <span className="icon__last__login text-success">
                <i className="fa fa-user-circle" />
            </span> */}
            <button class="button"><i className="fa fa-user-circle text-success"
                onClick={() => {
                    stateLogin = false;
                    const action = {
                        type: DANG_XUAT,
                        stateLogin: stateLogin
                    }
                    dispatch(action)
                    localStorage.removeItem(USER_LOGIN);
                    localStorage.removeItem(TOKEN)
                }} /></button>
            <span className="user">{userLogin.hoTen}</span>
        </div>
    }
    function GuestGreeting(props) {
        return <div className="header__login d-flex">
            <span className="mr-2"
                data-toggle="modal"
                data-target="#modelId" style={{ cursor: "pointer" }}>Đăng Ký</span>
            <Modal Component={<Registration />} />
            <NavLink to="/login" className="ml-auto" >
                <span className="icon__login">
                    <i className="fa fa-user-circle" />
                </span>
            Đăng Nhập
        </NavLink>
        </div>
    }
    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return <UserGreeting />;
        }
        return <GuestGreeting />;
    }
    return (

        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light header__custom">
                    <NavLink className="navbar-brand" to='/home'>
                        <img className="img-fluid" src="./img/web-logo.png" alt />
                    </NavLink>
                    <div className="collapse navbar-collapse" id="movieNavbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Lịch chiếu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cụm rạp</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tin tức</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ứng dụng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse login_custom" id="movieNavbar">
                        <Greeting isLoggedIn={stateLogin} />
                        <div className="form-group ml-4 mt-3">
                            <select className="form-control" name id>
                                <option>Hồ Chí Minh</option>
                                <option>Hà Nội</option>
                                <option>Đà Nẵng</option>
                            </select>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#movieNavbar" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                </nav>
            </header>

        </div>
    )
}
