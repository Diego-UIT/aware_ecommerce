import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserList from "./pages/userList/UserList";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Orders from "./pages/orders/Orders";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
    const admin = useSelector((state) => state.user.currentUser)
    console.log(admin)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
            {admin && (
                <>
                    <Topbar />
                    <div className="container">
                        <Sidebar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/users" element={<UserList />} />
                            <Route path="/orders" element={<Orders />} />
                            <Route path="/products" element={<ProductList />} />
                            <Route path="/product/:productId" element={<Product />} />
                            <Route path="/newProduct" element={<NewProduct />} />
                        </Routes>
                    </div>
                </>
            )}
        </BrowserRouter>
    );
}

export default App;
