import React from "react";
import "./topbar.scss";
import { NotificationsNone } from "@material-ui/icons";
import logo from "../../assets/images/logo@2x.png"
import { useNavigate } from 'react-router-dom'

export default function Topbar() {
    const navigate = useNavigate()

    const handleLogout = (navigate) => {
        localStorage.removeItem('persist:root')
        navigate('/login')
    }

    return (
        <div className="top-bar">
            <div className="wrapper">
                <div className="topLeft">
                    <img src={logo} alt="logo" className="topLeft__logo"></img>
                </div>
                <div className="topRight">
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topRight__avatar" />
                    <button 
                        onClick={() => handleLogout(navigate)}
                        className="topRight__logout">Log out</button>
                    <div className="topRight__icon">
                        <NotificationsNone />
                        <span className="topRight__icon__iconBadge">2</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
