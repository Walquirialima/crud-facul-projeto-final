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
    fetch("http://localhost:3001/fornecedores/")
      .then((response) => response.json())
      .then((data) => {
        const _rows: any = [];
        data.forEach((fornecedor: any) => {
          _rows.push(fornecedor);
        });
        setRows(_rows);
      });
  }, []);

  return (
    <TableContainer>
      <Table>
        <TableHead
          sx={{
            backgroundColor: "#2E3191",
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
              <TableCell>{row.nomeEmpresa}</TableCell>

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
                  <DeleteIcon color="primary" />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
