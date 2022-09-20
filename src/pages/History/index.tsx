import { useMemo } from "react";
import { Heading, Box } from "./history.styled";
import { Term } from "../../interfaces";
import SearchedTerms from "../../components/SearchTerms";

const History = () => {
  const terms: Term[] = useMemo(() => {
    const termsAsString = localStorage.getItem("terms");
    if (!termsAsString) return [];
    return (JSON.parse(termsAsString) as Term[]).reverse();
  }, []);

  return (
    <Box>
      <Heading>
        Search History
      </Heading>
      <SearchedTerms terms={terms} />
    </Box>
  );
};

export default History;
