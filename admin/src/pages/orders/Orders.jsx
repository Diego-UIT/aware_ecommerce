import "./orders.scss";
import { DataGrid } from "@material-ui/data-grid";
import { userRequest } from "../../requestMethods";
import { useState, useEffect } from "react";
import moment from 'moment'
import CurrencyFormat from 'react-currency-format';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
        try {
            const res = await userRequest.get("orders");
            setOrders(res.data);
        } catch {}
        };
        getOrders();
    }, []);

    const Button = ({ type }) => {
        return <button className={"order-status__btn " + type}>{type}</button>;
      };

    const columns = [
        {
            field: "_id", headerName: "ORDER ID", width: 270, headerAlign: 'center',
            renderCell: (params) => <span className="order-id">{params.value}</span>
        
        },
        {
            field: 'createdAt', headerName: 'ORDERED DATE', width: 200, headerAlign: 'center',
            renderCell: (params) => moment(params.value).format('MMMM Do YYYY')
        },
        { 
            field: "products", headerName: "DETAIL", width: 300, headerAlign: 'center',
            renderCell: (params) => {
                return (
                    params.value[0].title
                )
            }
        },
        {
          field: "amount",
          headerName: "TOTAL ($)",
          width: 150,
          headerAlign: 'center',
          renderCell: (params) => <CurrencyFormat value={params.value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        },
        {
          field: "status",
          headerName: "STATUS",
          width: 150,
          headerAlign: 'center',
          renderCell: (params) => {
            return (
              <div className="order-status">
                <Button type={params.row.status} />
              </div>
            );
          },
        },
    ];

    return (
        <div className="orders">
            <div className="orders__header">
                <h1 className="orders__header__title">Orders</h1>
            </div>
            <DataGrid
                autoHeight
                rows={orders}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={8}
                density='comfortable'
            />
        </div>
    );
}

export default Orders