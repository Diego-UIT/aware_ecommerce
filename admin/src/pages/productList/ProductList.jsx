import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";
import moment from 'moment'

export default function ProductList() {
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
          renderCell: (params) => {
            return (
              <div className="productListItem">
                <img className="productListImg" src={params.row.img} alt="" />
                {params.row.title}
              </div>
            );
          },
        },
        {
            field: 'createdAt', headerName: 'Create at', width: 170,
            renderCell: (params) => moment(params.value).format('DD-MM-YYYY HH:mm:ss')
        },
        { field: "inStock", headerName: "STOCK", width: 200 },
        {
          field: "price",
          headerName: "PRICE",
          width: 150,
        },
        {
          field: "action",
          headerName: "ACTIONS",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/product/" + params.row._id}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline
                  className="productListDelete"
                  onClick={() => handleDelete(params.row._id)}
                />
              </>
            );
          },
        },
    ];

    return (
        <div className="productList">
        <DataGrid
            rows={products}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={8}
            checkboxSelection
        />
        </div>
    );
}