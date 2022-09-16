import { Box } from "@mui/material";
import { useMemo } from "react";
import { Term } from "../common/interfaces";
import SearchedTerms from "../components/SearchTerms";

const History = () => {
  const terms: Term[] = useMemo(() => {
    const termsAsString = localStorage.getItem("terms");
    if (!termsAsString) return [];
    return (JSON.parse(termsAsString) as Term[]).reverse();
  }, []);

  return (
    <Box mx={2}>
      <SearchedTerms terms={terms} />
    </Box>
  );
};

export default History;
