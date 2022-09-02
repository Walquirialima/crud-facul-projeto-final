import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Stack,
  Typography,
} from "@mui/material";

import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

const AvatarUser = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        marginLeft: (theme) => theme.spacing(2),
      }}
    >
      <Button>
        <Stack direction="column">
          <Typography
            fontWeight="fontWeightBold"
            variant="body2"
            sx={{
              color: "#fff",
              margin: " 0 15px 0 0",
            }}
          >
            Admin
          </Typography>
        </Stack>

        <Avatar
          onClick={handleClick}
          alt="Remy Sharp"
          src="https://istoe.com.br/wp-content/uploads/sites/14/2020/10/caio-castro.jpg"
        />
      </Button>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: "240px",
          },
        }}
      >
        <Box
          sx={{
            padding: (theme) => theme.spacing(2),
          }}
        >
          <Typography component="h6" variant="subtitle2">
            Admin
          </Typography>
        </Box>
        <Divider />
        <Box>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Perfil" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        <Box>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Sair" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Menu>
    </Box>
  );
};

export default AvatarUser;
