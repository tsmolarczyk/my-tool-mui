import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const createPerson = (
  name: string,
  surname: string,
  weight: number,
  age: number
) => {
  return { name, surname, weight, age };
};

const rows = [
  createPerson("Marian", "Loboda", 55, 15),
  createPerson("Kamil", "Bykowski", 120, 45),
  createPerson("Tom", "Smolarczyk", 100, 555),
];

export const MyOwnTable = () => {
  const [open, setOpen] = React.useState(false);
  const [modal, setModal] = React.useState({
    name: "",
    surname: "",
    age: null,
    weight: null,
  });

  const handleOpen = (row: any) => {
    setOpen(true);
    setModal({
      name: row.name,
      surname: row.surname,
      age: row.age,
      weight: row.weight,
    });
    console.log(modal);
  };
  const handleClose = () => setOpen(false);

  // const handleEvent = (e: any) => {
  //   console.log(rows);
  //   console.log(e.currentTarget.parentNode);
  // };

  const handleEvent = (row: any) => {
    // this.setState({ ...this.state.jasper, name: 'someothername' });
    handleOpen(row);

    console.log(
      `Name is: ${row.name}, Surname: ${row.surname} Age: ${row.age}, Weight: ${row.weight}`
    );
  };

  return (
    <>
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
                  {/* {<Button onClick={handleEvent(info)}>klikej</Button>} */}
                  {<Button onClick={() => handleEvent(row)}>klikej</Button>}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <Typography>IMIE:{modal.name}</Typography>
            <Typography>Nazwisko: {modal.surname}</Typography>
            <Typography>Wiek: {modal.age}</Typography>
            <Typography>Waga: {modal.weight}</Typography>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
