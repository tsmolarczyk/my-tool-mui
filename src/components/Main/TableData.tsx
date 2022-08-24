import { useState, useEffect, useMemo } from "react";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
// import { Box } from "@mui/material";
// import { ColorLensOutlined } from "@mui/icons-material";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "userId", headerName: "userID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { userId: 1, id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { userId: 1, id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { userId: 1, id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { userId: 1, id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { userId: 1, id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { userId: 1, id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { userId: 1, id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { userId: 1, id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { userId: 1, id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export const TableData = () => {
  const mapRows = () => {
    const mapedRows = posts.map((el: any) => ({
      userId: el.userId,
      id: el.id,
      title: el.title,
      body: el.body,
    }));
    console.log("first");
    console.log(rows);
    console.log(mapedRows);
  };
  const [posts, setPosts] = useState<any>([]);

  const getPostsTitles = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((postsData) => postsData.json())
      .then((json) => setPosts(json));
  };

  useEffect(() => {
    getPostsTitles();
    mapRows();
  }, []);

  return (
    <>
      <div style={{ height: 450, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
      {useMemo(() => {
        console.log("123");
      }, [])}
    </>
  );
};
