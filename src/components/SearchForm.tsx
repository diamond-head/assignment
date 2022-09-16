import { Button, TextField as MuiTextField } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";
import { Box } from "@mui/system";

interface SearchFormProps {
  onSearch: (value: string) => void;
}

const TextField = styled(MuiTextField)({
  width: "100%",
  maxWidth: 700,
});

const SearchForm = ({ onSearch }: SearchFormProps) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <TextField
        label="Search Text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Box mt={1}>
        <Button variant="contained" onClick={() => searchValue && onSearch(searchValue)}>
          Search
        </Button>
      </Box>
    </div>
  );
};

export default SearchForm;
