import {
  Backdrop,
  Box,
  Button,
  Chip,
  Fade,
  Grid,
  Modal,
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
import { FormProvider, useForm, useFormState } from "react-hook-form";
import FormInput from "../FormInput";
const { useState, useEffect, useRef } = React;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// function createData(
//   companyName: string,
//   cnpj: string,
//   adress: string,
//   city: string
// ) {
//   return {
//     companyName,
//     cnpj,
//     adress,
//     city,
//   };
// }

const headCells = [
  {
    id: "nome",
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

interface FormData {
  nome: string;
  cnpj: string;
  adress: string;
  city: string;
}

export default function ClienteView() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = React.useState("0");
  const handleOpen = (id: string) => setOpen(id);
  const handleClose = () => setOpen("");
  const formMethods = useForm<FormData>();
  const ref = useRef(null);

  const handleChange = (row: any, attr: string, e: any) => {
    row[attr] = e.target.value;
    const _rows: any = rows.map((r: any) => {
      if (r.id == row.id) {
        r = row;
      }
      return r;
    });
    setRows(_rows);
  };

  useEffect(() => {
    handleClose();
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

    fetch("http://localhost:8080/api/fornecedores/" + id, requestOptions).then(
      (data) => {
        setRows(rows.filter((row: any) => row.id !== id));
      }
    );
  };

  const onClickEditar = (row: any) => {
    debugger;
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row),
    };

    fetch(
      "http://localhost:8080/api/fornecedores/" + row.id,
      requestOptions
    ).then((data) => {
      console.log(data);
      handleClose();
      document.location.reload();
    });
  };

  return (
    <>
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
                <TableCell>{row.cnpj}</TableCell>
                <TableCell>
                  <Chip label={row.endereco} />
                </TableCell>
                <TableCell>
                  <Chip label={row.cidade} />
                </TableCell>
                <TableCell>
                  <Box alignItems="center" display="flex">
                    <EditIcon
                      color="primary"
                      onClick={() => handleOpen(row.id)}
                    />
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={open == row.id}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade in={open == row.id}>
                        <Box sx={style}>
                          <Grid
                            container
                            component="main"
                            sx={{ height: "80vh" }}
                          >
                            <Grid
                              container
                              item
                              alignItems="center"
                              direction="column"
                              justifyContent="space-evenly"
                            >
                              <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                  <FormProvider {...formMethods}>
                                    <FormInput<FormData>
                                      InputProps={{
                                        sx: {
                                          borderRadius: "24px",
                                        },
                                      }}
                                      onChange={(e) =>
                                        handleChange(row, "nome", e)
                                      }
                                      name="nome"
                                      label="Nome"
                                      value={row.nome}
                                      required
                                      rules={
                                        {
                                          //  ...loginValidators(t).email,
                                        }
                                      }
                                    />
                                  </FormProvider>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  <FormProvider {...formMethods}>
                                    <FormInput<FormData>
                                      InputProps={{
                                        sx: {
                                          borderRadius: "24px",
                                        },
                                      }}
                                      onChange={(e) =>
                                        handleChange(row, "cnpj", e)
                                      }
                                      name="cnpj"
                                      value={row.cnpj}
                                      required
                                      rules={
                                        {
                                          //  ...loginValidators(t).email,
                                        }
                                      }
                                    />
                                  </FormProvider>
                                </Grid>
                                <Grid item xs={12}>
                                  <FormProvider {...formMethods}>
                                    <FormInput<FormData>
                                      InputProps={{
                                        sx: {
                                          borderRadius: "24px",
                                          marginBottom: "10px",
                                        },
                                      }}
                                      onChange={(e) =>
                                        handleChange(row, "endereco", e)
                                      }
                                      name="adress"
                                      value={row.endereco}
                                      required
                                      rules={
                                        {
                                          //  ...loginValidators(t).email,
                                        }
                                      }
                                    />
                                  </FormProvider>
                                </Grid>
                                <Grid item xs={12}>
                                  <FormProvider {...formMethods}>
                                    <FormInput<FormData>
                                      InputProps={{
                                        sx: {
                                          borderRadius: "24px",
                                          marginBottom: "10px",
                                        },
                                      }}
                                      onChange={(e) =>
                                        handleChange(row, "cidade", e)
                                      }
                                      name="city"
                                      value={row.cidade}
                                      required
                                      rules={
                                        {
                                          //  ...loginValidators(t).email,
                                        }
                                      }
                                    />
                                  </FormProvider>
                                </Grid>
                              </Grid>
                              <Button
                                color="primary"
                                //disabled={isLoading}
                                disableElevation
                                fullWidth
                                sx={{
                                  borderRadius: "24px",
                                  marginBottom: "30px",
                                }}
                                onClick={() => onClickEditar(row)}
                                size="large"
                                variant="contained"
                              >
                                Editar
                              </Button>
                            </Grid>
                          </Grid>
                        </Box>
                      </Fade>
                    </Modal>
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
    </>
  );
}
