import { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { Box, ErrorWrapper } from "./home.styled";

import { User } from "../../interfaces"
import SearchForm from "../../components/SearchForm"
import UserDetails from "../../components/UserDetails"
import { requestGithubUserDetails } from "../../services/github"

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
