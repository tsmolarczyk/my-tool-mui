import { useState, useEffect, useMemo } from 'react'

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { css, makeStyles } from '@mui/material'
import classNames from 'classnames'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 220 },
  { field: 'userId', headerName: 'userID', width: 220 },
  { field: 'title', headerName: 'First name', width: 220 },
  { field: 'lastName', headerName: 'Last name', width: 220 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
]

const rows = [
  { userId: 1, id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { userId: 1, id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { userId: 1, id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { userId: 1, id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { userId: 1, id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { userId: 1, id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { userId: 1, id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { userId: 1, id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { userId: 1, id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
]

export const TableData = () => {
  const [posts, setPosts] = useState<any>([])

  const getPostsTitles = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((postsData) => postsData.json())
      .then((json) => setPosts(json))
  }

  useEffect(() => {
    getPostsTitles()
  }, [])

  return (
    <>
      <div style={{ height: 450, width: '1200', fontSize: '40px' }}>
        <DataGrid
          rows={posts}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          style={{ fontSize: '10px', width: '100%' }}
        />
      </div>
      {useMemo(() => {
        console.log('123')
      }, [])}
    </>
  )
}
