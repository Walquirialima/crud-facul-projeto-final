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

const rows = [
  createData(
    "JR Embalagens ",
    "005.451.1820/0001-19",
    "Rua Numero 0, 125",
    "São paulo"
  ),
  createData(
    "JR Embalagens ",
    "005.451.1820/0001-19",
    "Rua Numero 0, 125",
    "São paulo"
  ),
  createData(
    "JR Embalagens ",
    "005.451.1820/0001-19",
    "Rua Numero 0, 125",
    "São paulo"
  ),
];

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
            <TableRow key={row.companyName}>
              <TableCell>{row.companyName}</TableCell>

              <TableCell>
                <Chip label={row.cnpj} />
              </TableCell>
              <TableCell>
                <Chip label={row.adress} />
              </TableCell>
              <TableCell>
                <Chip label={row.city} />
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
