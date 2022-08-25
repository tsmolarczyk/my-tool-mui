import { useState, useEffect } from 'react'

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

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
    </>
  )
}
