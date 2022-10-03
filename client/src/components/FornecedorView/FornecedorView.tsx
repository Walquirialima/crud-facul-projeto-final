import {
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
const { useState, useEffect } = React;

function createData(
  companyName: string,
  cnpj: string,
  adress: string,
  city: string
) {
  return {
    companyName,
    cnpj,
    adress,
    city,
  };
}

const headCells = [
  {
    id: "companyName",
    label: "Nome",
  },
  {
    id: "cnpj",
    label: "CNPJ",
  },
  {
    id: "adress",
    label: "Endereço",
  },
  {
    id: "city",
    label: "Cidade",
  },
  {
    id: "edit",
    label: "Editar",
  },
];

export default function ClientView() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/fornecedores")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const _rows: any = [];
        data.forEach((fornecedor: any) => {
          _rows.push(fornecedor);
        });
        // this.setState({ rows: rows });
        setRows(_rows);
        console.log(data, rows);
      });
  }, []);

  const onClickDeletar = (id: any) => {
    console.log(id);
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    };

    fetch("http://localhost:8080/api/fornecedores" + id, requestOptions).then(
      (data) => {
        setRows(rows.filter((row: any) => row.id !== id));
      }
    );
  };

  return (
    <TableContainer
      sx={{
        borderRadius: "26px",
      }}
    >
      <Table>
        <TableHead
          sx={{
            backgroundColor: "#000000",
            borderRadius: "16px",
          }}
        >
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                sx={{
                  color: "#fff",
                }}
              >
                {headCell.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow key={row.id}>
              <TableCell>{row.nome}</TableCell>

              <TableCell>
                <Chip label={row.cnpj} />
              </TableCell>
              <TableCell>
                <Chip label={row.endereco} />
              </TableCell>
              <TableCell>
                <Chip label={row.cidade} />
              </TableCell>
              <TableCell>
                <Box alignItems="center" display="flex">
                  <EditIcon color="primary" />
                  <DeleteIcon
                    color="primary"
                    onClick={() => onClickDeletar(row.id)}
                  />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
