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

function createData(productName: string, company: string) {
  return {
    productName,
    company,
  };
}

const rows = [
  createData("Caixote de madeira", "Jr Embalagens"),
  createData("Caixote de madeira", "Jr Embalagens"),
  createData("Caixote de madeira", "Jr Embalagens"),
];

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
          {rows.map((row) => (
            <TableRow key={row.productName}>
              <TableCell>{row.productName}</TableCell>

              <TableCell>
                <Chip label={row.company} />
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
