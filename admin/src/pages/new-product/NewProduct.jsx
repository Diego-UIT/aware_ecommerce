import { useState } from "react"
import "./new-product.scss"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"
import app from "../../firebase"
import { addProduct } from "../../redux/callAPI"
import { useDispatch } from "react-redux"
import Swal from 'sweetalert2'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { Link } from 'react-router-dom'

const NewProduct = () => {
    const [inputs, setInputs] = useState({})
    const [file, setFile] = useState(null)
    const [cat, setCat] = useState(null)
    const [size, setSize] = useState(null)
    const [color, setColor] = useState(null)
    const [inStock, setInStock] = useState(false)
    const animatedComponents = makeAnimated()
    const dispatch = useDispatch()

    const colorOptions = [
        { value: '#e63946', label: 'Red' },
        { value: '#0096c7', label: 'Blue' },
        { value: '#52b788', label: 'Green' },
        { value: '#ffadad', label: 'Pink' },
        { value: '#000000', label: 'Black' },
        { value: '#6c757d', label: 'Gray' },
        { value: '#e85d04', label: 'Orange' },
    ]

    const sizeOptions = [
        { value: 'XS', label: 'XS' },
        { value: 'S', label: 'S' },
        { value: 'M', label: 'M' },
        { value: 'L', label: 'L' },
        { value: 'XL', label: 'XL' },
        { value: 'XXL', label: 'XXL' },
    ]

    const catOptions = [
        { value: 'men', label: 'Men' },
        { value: 'ladies', label: 'Ladies' },
        { value: 'boys', label: 'Boys' },
        { value: 'girls', label: 'Girls' },
    ]

    const inStockOptions = [
        { value: 'true', label: 'True' },
        { value: 'false', label: 'False' },
    ]

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app)
        const storageRef = ref(storage, fileName)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                switch (snapshot.state) {
                case "paused":
                    console.log("Upload is paused")
                    break
                case "running":
                    console.log("Upload is running")
                    break
                default:
                }
            },
            (error) => {
                
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const product = { 
                        ...inputs, 
                        img: downloadURL, 
                        categories: cat.value, 
                        size: size, 
                        color: color, 
                        inStock: inStock.value
                    }
                    console.log(product)
                    addProduct(product, dispatch)
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Add successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
            }
        )
    }
    
    return (
        <div className="new-product">
            <h1 className="product-title">Add product</h1>
            <form className="product-form">
                <div className="product-form__item">
                    <div className="product-form__item__col-25">
                        <label>PHOTOS</label>
                    </div>
                    <div className="product-form__item__col-75">
                        <input
                            type="file"
                            id="file"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                </div>
                <div className="product-form__item">
                    <div className="product-form__item__col-25">
                        <label>NAME</label>
                    </div>
                    <div className="product-form__item__col-75">
                        <input
                            name="title"
                            type="text"
                            placeholder="Collete Stretch Linen Minidress"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="product-form__item">
                    <div className="product-form__item__col-25">
                        <label>CATEGORIES</label>
                    </div>
                    <div className="product-form__item__col-75">
                        <Select 
                            options={catOptions} 
                            onChange={setCat}
                        />
                    </div>
                </div>
                <div className="product-form__item">
                    <div className="product-form__item__col-25">
                        <label>PRICE ($)</label>
                    </div>
                    <div className="product-form__item__col-75">
                        <input
                            name="price"
                            type="number"
                            placeholder="69"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="product-form__item">
                    <div className="product-form__item__col-25">
                        <label>SIZE</label>
                    </div>
                    <div className="product-form__item__col-75">
                        <Select 
                            options={sizeOptions} 
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            defaultValue={size}
                            onChange={setSize}
                        />
                    </div>
                </div>
                <div className="product-form__item">
                    <div className="product-form__item__col-25">
                        <label>COLORS</label>
                    </div>
                    <div className="product-form__item__col-75">
                        <Select 
                            options={colorOptions} 
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            defaultValue={color}
                            onChange={setColor}
                        />
                    </div>
                </div>
                <div className="product-form__item">
                    <div className="product-form__item__col-25">
                        <label>QUANTITY</label>
                    </div>
                    <div className="product-form__item__col-75">
                        <input 
                            name="quantity"
                            type="number"
                            placeholder="200"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="product-form__item">
                    <div className="product-form__item__col-25">
                        <label>STOCK</label>
                    </div>
                    <div className="product-form__item__col-75">
                        <Select 
                            options={inStockOptions} 
                            onChange={setInStock}
                        />
                    </div>
                </div>
                <div className="product-form__item">
                    <button onClick={handleClick} className="product-form__item__btn-add">
                        Complete
                    </button>
                    <Link to="/products">
                        <button className="product-form__item__btn-cancel">
                            Cancel
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default NewProduct