import { useState } from "react";
import "./newProduct.scss";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/callAPI";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'

export default function NewProduct() {
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState([]);
    const [color, setColor] = useState([]);
    const [size, setSize] = useState([]);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    const handleCat = (e) => {
        setCat(e.target.value.split(","));
    };

    const handleColor = (e) => {
        setColor(e.target.value.split(","));
    };

    const handleSize = (e) => {
        setSize(e.target.value.split(","));
    };

    const handleClick = (e) => {
        e.preventDefault();
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                    }
            },
            (error) => {
                
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const product = { ...inputs, img: downloadURL, categories: cat, color: color, size: size };
                    addProduct(product, dispatch);
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Add successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                });
            }
        );
    };

    return (
        <div className="new-product">
            <h1 className="product-title">New Product</h1>
            <form className="product-form">
                <div className="product-form__item">
                    <label>Image</label>
                    <input
                        type="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <div className="product-form__item">
                    <label>Title</label>
                    <input
                        name="title"
                        type="text"
                        placeholder="Apple Airpods"
                        onChange={handleChange}
                    />
                </div>
                <div className="product-form__item">
                    <label>Price</label>
                    <input
                        name="price"
                        type="number"
                        placeholder="100"
                        onChange={handleChange}
                    />
                </div>
                <div className="product-form__item">
                    <label>Categories</label>
                    <input type="text" placeholder="jeans,skirts" onChange={handleCat} />
                </div>
                <div className="product-form__item">
                    <label>Colors</label>
                    <input type="text" placeholder="red, pink, gray" onChange={handleColor} />
                </div>
                <div className="product-form__item">
                    <label>Size</label>
                    <input type="text" placeholder="S, M, L" onChange={handleSize} />
                </div>
                <div className="product-form__item">
                    <label>Stock</label>
                    <select name="inStock" onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <button onClick={handleClick} className="product-form__btn-add">
                    Create
                </button>
            </form>
        </div>
    );
}