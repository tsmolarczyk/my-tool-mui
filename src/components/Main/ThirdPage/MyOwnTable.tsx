import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material'
import { PersonInfoDialog } from './PersonInfoDialog'

// import { PersonInfoDialog } from './ThirdPage/PersonInfoDialog'

const createPerson = (
  name: string,
  surname: string,
  weight: number,
  age: number
) => {
  return { name, surname, weight, age }
}

const rows = [
  createPerson('Marian', 'Loboda', 55, 15),
  createPerson('Kamil', 'Bykowski', 120, 45),
]

export const MyOwnTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableCell>IMIE</TableCell>
          <TableCell>NAZWISKO</TableCell>
          <TableCell>WAGA</TableCell>
          <TableCell>WIEK</TableCell>
          <TableCell></TableCell>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.surname}</TableCell>
              <TableCell>{row.weight}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>
                {<Button onClick={() => <PersonInfoDialog />}>klikej</Button>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
