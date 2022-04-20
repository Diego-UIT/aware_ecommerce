import { useLocation } from "react-router-dom";
import "./product.scss";
import { Publish } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateProduct } from "../../redux/callAPI";
import Swal from 'sweetalert2'

export default function Product() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const dispatch = useDispatch();

    const product = useSelector((state) =>
        state.product.products.find((product) => product._id === productId)
    );

    const [name, setName] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [inStock, setInStock] = useState(product.inStock);
    const [cat, setCat] = useState(product.categories);
    const [color, setColor] = useState(product.color);
    const [size, setSize] = useState(product.size);

    const handleCat = (e) => {
        setCat(e.target.value.split(","));
    };

    const handleColor = (e) => {
        setColor(e.target.value.split(","));
    };

    const handleSize = (e) => {
        setSize(e.target.value.split(","));
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const params = {
            title: name, 
            price: price, 
            categories: cat, 
            color: color, 
            size: size, 
            inStock: inStock
        }
        updateProduct(productId, params, dispatch);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Update successfully!',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <div className="product">
            <div className="title-container">
                <h1 className="title-container__title">Product</h1>
            </div>
            <div className="product-bottom">
                <form className="product-bottom__form">
                    <div className="product-bottom__form__form-left">
                        <label>Product Name</label>
                        <input
                            name="title"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>Price</label>
                        <input 
                            name="price" 
                            type="text" 
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <label>Categories</label>
                        <input type="text" value={cat} onChange={handleCat} />
                        <label>Size</label>
                        <input type="text" value={size} onChange={handleSize} />
                        <label>Colors</label>
                        <input type="text" value={color} onChange={handleColor} />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock" onChange={(e) => setInStock(e.target.value)}>
                            <option value={inStock}>{product.inStock ? 'Yes' : 'No'}</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="product-bottom__form__form-right">
                        <div className="upload">
                            <img src={product.img} alt="" className="upload__img" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button onClick={handleUpdate} className="btn-update">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}