import React from "react";
import "./topbar.scss";
import { NotificationsNone } from "@material-ui/icons";
import logo from "../../assets/images/logo@2x.png"
import { logout } from "../../redux/callAPI"
import { useDispatch } from "react-redux"

export default function Topbar() {
    const dispatch = useDispatch();

    const onLogout = () => {
        console.log('log out!')
        // logout(dispatch);
    }

    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="topLeft">
                    <img src={logo} alt="logo" className="topLeft__logo"></img>
                </div>
                <div className="topRight">
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topRight__avatar" />
                    <span className="topRight__name">Admin</span>  
                    <button onClick={onLogout}>Log out</button>
                    <div className="topRight__icon">
                        <NotificationsNone />
                        <span className="topRight__icon__iconBadge">2</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
