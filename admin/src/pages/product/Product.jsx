import { Link, useLocation } from "react-router-dom";
import "./product.css";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function Product() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];

    const product = useSelector((state) =>
        state.product.products.find((product) => product._id === productId)
    );

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productBottom">
                <form className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder={product.title} />
                    <label>Price</label>
                    <input type="text" placeholder={product.price} />
                    <label>In Stock</label>
                    <select name="inStock" id="idStock">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <label>Size</label>
                    <select name="size" id="size">
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="S">S</option>
                        <option value="XL">XL</option>
                    </select>
                    <label>Colors</label>
                    <select name="color" id="color">
                        <option value="red">red</option>
                        <option value="pink">pink</option>
                        <option value="black">black</option>
                        <option value="gray">gray</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src={product.img} alt="" className="productUploadImg" />
                        <label for="file">
                            <Publish />
                        </label>
                        <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                    <button className="productButton">Update</button>
                </div>
                </form>
            </div>
        </div>
    );
}