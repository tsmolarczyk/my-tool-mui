import { useState, useEffect, useMemo } from 'react'

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { Button, css, makeStyles } from '@mui/material'
import classNames from 'classnames'

import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'
import { LinkProps } from '@mui/material/Link'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 220 },
  { field: 'userId', headerName: 'userID', width: 220 },
  { field: 'title', headerName: 'First name', width: 220 },
]

export const DetailsTable = () => {
  const mapRows = () => {
    const mapedRows = posts.map((el: any) => ({
      userId: el.userId,
      id: el.id,
      title: el.title,
      body: el.body,
    }))
    console.log('first')
    console.log(mapedRows)
  }
  const [posts, setPosts] = useState<any>([])

  const getPostsTitles = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((postsData) => postsData.json())
      .then((json) => setPosts(json))
  }

  useEffect(() => {
    getPostsTitles()
    mapRows()
    console.log(posts)
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
        <Button
          fullWidth
          variant="contained"
          color="success"
          size="large"
          component={Link}
          to={`/${page}`}
          asdasdsadasd
        >
          dfgdfg CLIK FOR MORE INFO
        </Button>
      </div>
      {useMemo(() => {
        console.log('123')
      }, [])}
    </>
  )
}
