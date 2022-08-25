import React from 'react'
import { Button } from '@mui/material'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import { DetailsTable } from '../DetailsTable'

export const SecondPage = () => {
  return (
    <Router>
      <Link to="/">one</Link>
      <Link to="/secondpage">
        <Button
          fullWidth
          variant="contained"
          color="success"
          size="large"
          //   to="/secondpage"
          // component={RouterLink}
          // to="/detailedinformation"
        >
          CLIK FOR MORE INFO
        </Button>
      </Link>

      <Routes>
        <Route path="/" element={<DetailsTable />} />
        <Route path="/secondpage" element={<div>drugastrona</div>} />
      </Routes>
    </Router>
  )
}
