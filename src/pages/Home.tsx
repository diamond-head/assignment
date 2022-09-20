import { useCallback, useState } from "react";
import { Box as MuiBox } from "@mui/system";
import styled from "@emotion/styled";
import { useSearchParams } from 'react-router-dom';

import { User } from "../common/interfaces"
import SearchForm from "../components/SearchForm"
import UserDetails from "../components/UserDetails"
import { requestGithubUserDetails } from "../services/github"

const Box = styled(MuiBox)({
  marginTop: 86,
  textAlign: 'center',
  width: '100%',
  padding: 16
})

const ErrorWrapper = styled.div`
  margin-top: 24px;
  color: tomato;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
`

const Home = () => {
  const [searchParams] = useSearchParams()
  const [user, setUser] = useState<User | undefined>()
  const [searching, setSearching] = useState<boolean>(false)
  const [errorState, setErrorState] = useState<string | null>(null)
  const usernameFromQS: string | null = searchParams.get('username')

  const handleOnSearch = (value: string) => {
    fetchResults(value)
  }

  const fetchResults = async (value: string) => {
    setSearching(true)
    try {
      const response = await requestGithubUserDetails({ username: value })
      if (response) {
        if (response.error) {
          setErrorState(response.error)
          return
        }
        setUser(response)
      }
      setSearching(false)
    } catch (e) {
      setSearching(false)
      setErrorState('Could not fetch details, Please try again!')
    }
  }

  return (
    <Box mx={2}>
      <SearchForm
        onSearch={handleOnSearch}
        loading={searching}
        {...(usernameFromQS ? { searchString: usernameFromQS } : {})}
      />
      {errorState && (
        <ErrorWrapper>
          {errorState}
        </ErrorWrapper>
      )}
      {user && <UserDetails user={user} />}
    </Box>
  );
};

export default Home;
