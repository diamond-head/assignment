import { useState } from "react";
import {
  Button,
  TextField as MuiTextField,
  CircularProgress
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styled from "@emotion/styled";

interface SearchFormProps {
  onSearch: (value: string) => void;
  loading: boolean;
  searchString?: string;
}

const FormWrapper = styled.div`
  display: flex;
  gap: 8px;
`

const TextField = styled(MuiTextField)({
  width: "100%",
  maxWidth: 700,
});

const SearchForm = ({ onSearch, loading, searchString }: SearchFormProps) => {
  const [searchValue, setSearchValue] = useState(searchString || "");

  return (
    <FormWrapper>
      <TextField
        label="Search Username"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button disabled={loading} variant="contained" onClick={() => searchValue && onSearch(searchValue)}>
        {loading ? <CircularProgress color="inherit" /> : <SearchIcon />}
      </Button>
    </FormWrapper>
  );
};

export default SearchForm;
