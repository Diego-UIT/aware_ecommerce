import "./sidebar.scss";
import {
  LineStyle,
  PermIdentity,
  Storefront,
  AttachMoney,
  Settings
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="wrapper">
                <div className="sidebar-menu">
                    <ul className="sidebar-menu__list">
                        <Link to="/" className="link">
                            <li className="sidebar-menu__list__item active">
                                <LineStyle className="icon" />
                                Overview
                            </li>
                        </Link>
                        <Link to="/users" className="link">
                            <li className="sidebar-menu__list__item">
                                <PermIdentity className="icon" />
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebar-menu__list__item">
                                <Storefront className="icon" />
                                Products
                            </li>
                        </Link>
                        <Link to="/orders" className="link">
                            <li className="sidebar-menu__list__item">
                                <AttachMoney className="icon" />
                                Orders
                            </li>
                        </Link>
                        <li className="sidebar-menu__list__item">
                            <Settings className="icon" />
                            Setting
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
