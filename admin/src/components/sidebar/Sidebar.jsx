import "./sidebar.css";
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
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" />
                                Overview
                            </li>
                        </Link>
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcon" />
                                Products
                            </li>
                        </Link>
                        <Link to="/orders" className="link">
                            <li className="sidebarListItem">
                                <AttachMoney className="sidebarIcon" />
                                Orders
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Settings className="sidebarIcon" />
                            Setting
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
