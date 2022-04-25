import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from "./pages/product-list/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/new-product/NewProduct";
import Orders from "./pages/orders/Orders";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
    const admin = useSelector((state) => state.user.currentUser)

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
