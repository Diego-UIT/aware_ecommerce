import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRequest } from "../../requestMethods";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
        try {
            const res = await userRequest.get("users/?new=true");
            setUsers(res.data);
        } catch {}
        };
        getUsers();
    }, []);

    const columns = [
        { field: "_id", headerName: "ID", width: 250 },
        {
        field: "user",
        headerName: "User",
        width: 300,
        renderCell: (params) => {
            return (
            <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt="" />
                {params.row.username}
            </div>
            );
        },
        },
        { field: "email", headerName: "Email", width: 300 },
    ];

    return (
        <div className="userList">
        <DataGrid
            rows={users}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={8}
            checkboxSelection
        />
        </div>
    );
}
