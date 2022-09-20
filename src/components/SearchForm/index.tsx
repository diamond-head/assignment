import { useCallback, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { TextField, FormWrapper } from './search-form.styled'

interface SearchFormProps {
  onSearch: (value: string) => void;
  loading: boolean;
  searchString?: string;
}

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
