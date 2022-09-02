import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

const SearchInput = () => {
  return (
    <>
      <Box>
        <TextField
          fullWidth
          label="Buscar um cliente"
          id="fullWidth"
          InputProps={{
            sx: {
              borderRadius: "24px",
              height: "50px",
            },
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
    </>
  );
};

export default SearchInput;
