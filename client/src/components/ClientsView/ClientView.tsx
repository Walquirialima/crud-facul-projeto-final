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
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "../FormInput";
const { useState, useEffect } = React;

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

const headCells = [
  {
    id: "name",
    label: "Nome",
  },
  {
    id: "cpf",
    label: "CPF",
  },
  {
    id: "birthday",
    label: "Nascimento",
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
  name: string;
  cpf: string;
  birthday: string;
  street: string;
  city: string;
}

export default function ClientView() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const formMethods = useForm<FormData>();

  useEffect(() => {
    fetch("http://localhost:8080/api/clientes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const _rows: any = [];
        data.forEach((cliente: any) => {
          _rows.push(cliente);
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

    fetch("http://localhost:8080/api/clientes" + id, requestOptions).then(
      (data) => {
        setRows(rows.filter((row: any) => row.id !== id));
      }
    );
  };

  const onClickEditar = (id: any) => {
    const form = formMethods.getValues();
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: form.name,
        nascimento: form.birthday,
        endereco: form.street,
        cidade: form.city,
        cpf: form.cpf,
      }),
    };

    fetch("http://localhost:8080/api/clientes" + id, requestOptions).then(
      (data) => {
        console.log(data);
        handleClose();
        document.location.reload();
      }
    );
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
                <TableCell>{row.cpf}</TableCell>
                <TableCell>
                  <Chip label={row.nascimento} />
                </TableCell>
                <TableCell>
                  <Chip label={row.endereco} />
                </TableCell>
                <TableCell>
                  <Chip label={row.cidade} />
                </TableCell>
                <TableCell>
                  <Box alignItems="center" display="flex">
                    <EditIcon color="primary" onClick={() => handleOpen()} />
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade in={open}>
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
                                      autoComplete="name"
                                      autoFocus
                                      name="name"
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
                                      autoComplete="name"
                                      autoFocus
                                      name="cpf"
                                      value={row.cpf}
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
                                      autoFocus
                                      name="birthday"
                                      value={row.nascimento}
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
                                      autoFocus
                                      name="street"
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
                                <Grid item xs={12}>
                                  <FormProvider {...formMethods}>
                                    <FormInput<FormData>
                                      InputProps={{
                                        sx: {
                                          borderRadius: "24px",
                                          marginBottom: "10px",
                                        },
                                      }}
                                      autoComplete="email"
                                      autoFocus
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
                                onClick={() => onClickEditar(row.id)}
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
