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

const headCells = [
  {
    id: "productName",
    label: "Nome do produto",
  },
  {
    id: "company",
    label: "Nome do fornecedor",
  },
  {
    id: "edit",
    label: "Editar",
  },
];

export default function ProdutoView() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/produtos/")
      .then((response) => response.json())
      .then((data) => {
        const _rows: any = [];
        data.forEach((produto: any) => {
          _rows.push(produto);
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
              <TableCell>{row.nomeProduto}</TableCell>

              <TableCell>
                <Chip label={row.nomeEmpresa} />
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
