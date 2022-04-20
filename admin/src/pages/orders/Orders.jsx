import "./orders.scss";
import { DataGrid } from "@material-ui/data-grid";
import { userRequest } from "../../requestMethods";
import { useState, useEffect } from "react";
import moment from 'moment'

export default function UserList() {
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
        return <button className={"ordersStatus__btn " + type}>{type}</button>;
      };

    const columns = [
        { field: "_id", headerName: "ORDER ID", width: 250 },
        {
            field: 'createdAt', headerName: 'ORDERED DATE', width: 200,
            renderCell: (params) => moment(params.value).format('DD-MM-YYYY HH:mm:ss')
        },
        { field: "userId", headerName: "CUSTOMER", width: 250 },
        {
          field: "amount",
          headerName: "TOTAL ($)",
          width: 150,
        },
        {
          field: "status",
          headerName: "STATUS",
          width: 150,
          renderCell: (params) => {
            return (
              <div className="ordersStatus">
                <Button type={params.row.status} />
              </div>
            );
          },
        },
    ];

    return (
        <div className="orders">
        <DataGrid
            rows={orders}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={8}
            checkboxSelection
        />
        </div>
    );
}
