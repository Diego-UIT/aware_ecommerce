import "./product-list.scss";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/callAPI";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment'
import CurrencyFormat from 'react-currency-format';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);

    useEffect(() => {
        getProducts(dispatch);
      }, [dispatch]);
    

    const handleDelete = (id) => {
        deleteProduct(id, dispatch);
    };

    const columns = [
        {
          field: "product",
          headerName: "PRODUCTS",
          width: 400,
          headerAlign: 'center',
          renderCell: (params) => {
            return (
              <div className="product-list__item">
                <img className="product-list__item__img" src={params.row.img} alt="" />
                <div className="product-list__item__info">
                    {params.row.title}
                    <p>{params.row.categories[0]}</p>
                </div>
              </div>
            );
          },
        },
        { field: "inStock", headerName: "STOCK", width: 150 },
        {
            field: 'createdAt', headerName: 'DATE ADDED', width: 200,
            renderCell: (params) => moment(params.value).format('MMMM Do YYYY')
        },
        {
          field: "price",
          headerName: "PROFIT ($)",
          width: 200,
          renderCell: (params) => <CurrencyFormat value={params.value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        },
        {
          field: "action",
          headerName: "ACTIONS",
          width: 150,
          renderCell: (params) => {
            return (
              <div className="product-list__action">
                <Link to={"/product/" + params.row._id}>
                    <EditIcon className="product-list__action__edit"/>
                </Link>
                <DeleteOutline
                    className="product-list__action__delete"
                    onClick={() => handleDelete(params.row._id)}
                /> 
              </div>
            );
          },
        },
    ];

    return (
        <div className="product-list">
            <div className="product-list__header">
                <h1 className="product-list__header__title">Products</h1>
                <Link to="/newproduct">
                    <button className="product-list__header__btn-add">
                        <AddOutlinedIcon className="icon"/>
                        Add product
                    </button>
                </Link>
            </div>
            <DataGrid
                autoHeight
                rows={products}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={8}
                density='comfortable'
            />
        </div>
    );
}

export default ProductList