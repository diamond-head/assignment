import { useState } from "react";
import { Box as MuiBox } from "@mui/system";
import styled from "@emotion/styled";
import { useSearchParams } from 'react-router-dom';

import { User } from "../common/interfaces";
import SearchForm from "../components/SearchForm";
import UserDetails from "../components/UserDetails";
import { requestGithubUserDetails } from "../services/github";

const Box = styled(MuiBox)({
  marginTop: 86,
  textAlign: 'center',
  width: '100%',
  padding: 16
})

const Home = () => {
  const [searchParams] = useSearchParams()
  const [user, setUser] = useState<User | undefined>();
  const [searching, setSearching] = useState<boolean>(false);

  const fetchResults = async (value: string) => {
    setSearching(true);
    const response = await requestGithubUserDetails({ username: value })
    if (response) {
      setUser(response)
    }
    setSearching(false);
  };

  const usernameFromQS: string | null = searchParams.get('username')

  return (
    <Box mx={2}>
      <SearchForm
        onSearch={(value: string) => fetchResults(value)}
        loading={searching}
        {...(usernameFromQS ? { searchString: usernameFromQS } : {})}
      />
      {user && <UserDetails user={user} />}
    </Box>
  );
};

export default Home;
