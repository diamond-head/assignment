import { useCallback, useState } from "react";
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
  '@media (max-width: 420px)': {
    maxWidth: 320
  }
});

const SearchForm = ({ onSearch, loading, searchString }: SearchFormProps) => {
  const [searchValue, setSearchValue] = useState<string>(searchString || "");
  const [errorState, setErrorState] = useState<string | null>(null)

  const handleInputChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
    !!value && setErrorState(null)
  }

  const handleOnSearch = useCallback((): void => {
    if (!searchValue || searchValue === '') {
      setErrorState('Please enter username')
      return
    }
    onSearch(searchValue)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue])

  return (
    <FormWrapper>
      <TextField
        error={!!errorState}
        helperText={errorState}
        label="Search Username"
        value={searchValue}
        onChange={handleInputChange}
        size="small"
      />
      <Button size="small" disabled={loading} variant="contained" onClick={handleOnSearch}>
        {loading ? <CircularProgress color="inherit" /> : <SearchIcon />}
      </Button>
    </FormWrapper>
  );
};

export default SearchForm;
