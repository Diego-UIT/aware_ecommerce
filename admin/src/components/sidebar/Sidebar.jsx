import "./sidebar.scss";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListIcon from '@mui/icons-material/List';
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="wrapper">
                <div className="sidebar-menu">
                    <ul className="sidebar-menu__list">
                        <Link to="/orders" className="link">
                            <li className="sidebar-menu__list__item active">
                                <ShoppingCartIcon className="icon" />
                                Orders
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebar-menu__list__item">
                                <ListIcon className="icon" />
                                Products
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}
