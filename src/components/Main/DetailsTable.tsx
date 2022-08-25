import { useState, useEffect, useMemo } from 'react'

import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Button } from '@mui/material'

import { BrowserRouter as Router, Link as RouterLink } from 'react-router-dom'
import { Route } from 'react-router'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 220 },
  { field: 'userId', headerName: 'userID', width: 220 },
  { field: 'title', headerName: 'First name', width: 220 },
]

export const DetailsTable = () => {
  const [posts, setPosts] = useState<any>([])

  const getPostsTitles = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((postsData) => postsData.json())
      .then((json) => setPosts(json))
  }

  useEffect(() => {
    getPostsTitles()
    console.log(posts)
  }, [])

  return (
    <Router>
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

          <Button
            fullWidth
            variant="contained"
            color="success"
            size="large"
            component={RouterLink}
            to="/detailedinformation"
          >
            CLIK FOR MORE INFO
          </Button>
        </div>
        {useMemo(() => {
          console.log('123')
        }, [])}
        <Route path="/">
          <div>Here's Home</div>
        </Route>
        <Route path="/detailedinformation">info info read it maaaan</Route>
      </>
    </Router>
  )
}
