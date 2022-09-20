import { useMemo } from "react";
import { Box } from "@mui/material";
import { Heading } from "./history.styled";
import { Term } from "../../interfaces";
import SearchedTerms from "../../components/SearchTerms";

const History = () => {
  const terms: Term[] = useMemo(() => {
    const termsAsString = localStorage.getItem("terms");
    if (!termsAsString) return [];
    return (JSON.parse(termsAsString) as Term[]).reverse();
  }, []);

  return (
    <Box mt={9} mx={2}>
      <Heading>
        Search History
      </Heading>
      <SearchedTerms terms={terms} />
    </Box>
  );
};

export default History;
