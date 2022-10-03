import * as React from "react";

import {
  Box,
  Container,
  Grid,
  IconButton,
  List,
  Typography,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";

import AvatarUser from "../Avatar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import ListItems from "../ListItems";
import MenuIcon from "@mui/icons-material/Menu";
import MuiDrawer from "@mui/material/Drawer";
import SearchInput from "../SearchInput";
import { Toolbar } from "@mui/material";
import ModalCreateProduto from "../ModalCreateProduto";
import ModalCreateCliente from "../ModalCreateCliente";
import ModalCreateFornecedor from "../ModalCreateFornecedor";
import ProdutoView from "../ProdutoView";
import FornecedorView from "../FornecedorView";
import ClientView from "../ClientsView";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme({
  palette: {
    primary: {
      main: "#660bb5",
    },
    secondary: {
      main: "#660bb5",
    },
  },
});

function AppBarContent() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Sistema de gerenciamento
            </Typography>
            <AvatarUser />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">{ListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />

          <Container maxWidth="xl">
            <Grid container spacing={3} paddingY={3}>
              <Grid item xs={12} md={12} lg={12}>
                <SearchInput />
              </Grid>

              <Grid container paddingY={3} paddingX={3}>
                <Grid
                  container
                  item
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <ModalCreateCliente />
                  <Box paddingX={3} paddingY={1} />
                  <ModalCreateFornecedor />
                  {/*
                  <Box paddingX={3} paddingY={1} />
                  <ModalCreateProduto /> */}
                </Grid>
              </Grid>

              <Grid item xs={12} md={12} lg={12}>
                <ClientView />
              </Grid>

              <Grid item xs={12} md={12} lg={12} paddingY={3}>
                <FornecedorView />
              </Grid>

              {/*
              <Grid item xs={12} md={12} lg={12} paddingY={3}>
                <ProdutoView />
              </Grid> */}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function AppBarContainer() {
  return <AppBarContent />;
}
