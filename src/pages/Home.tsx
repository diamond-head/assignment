import { Box } from "@mui/system";
import { useState } from "react";
import { Term, User } from "../common/interfaces";
import SearchForm from "../components/SearchForm";
import UserDetails from "../components/UserDetails";

const Home = () => {
  const [user, setUser] = useState<User | undefined>();
  const [serching, setSearching] = useState(false);

  const fetchResults = async (value: string) => {
    setSearching(true);
    try {
      const response = await fetch("http://api.github.com/users/" + value);
      const json = await response.json();

      if (json.repos_url) {
        const repoResponse = await fetch(json.repos_url);
        json.repos = await repoResponse.json();
      }
      setUser(json);
      const termsInString = localStorage.getItem("terms");
      if (!termsInString) {
        localStorage.setItem(
          "terms",
          JSON.stringify([{ value, timeStamp: Date.now() } as Term])
        );
      } else {
        const terms = JSON.parse(termsInString) as Term[];
        terms.push({ value, timeStamp: Date.now() });
        localStorage.setItem("terms", JSON.stringify(terms));
      }
    } catch (e) {
      console.log(e);
    }
    setSearching(false);
  };

  return (
    <Box mx={2}>
      <SearchForm onSearch={(value: string) => fetchResults(value)} />
      {user && <UserDetails user={user} />}
    </Box>
  );
};

export default Home;
