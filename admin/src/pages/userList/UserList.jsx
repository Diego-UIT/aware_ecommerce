import "./userList.scss";
import { DataGrid } from "@material-ui/data-grid";
import { userRequest } from "../../requestMethods";
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
            <div className="user-list__user">
                {params.row.username}
            </div>
            );
        },
        },
        { field: "email", headerName: "Email", width: 300 },
    ];

    return (
        <div className="user-list">
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
