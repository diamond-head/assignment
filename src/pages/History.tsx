import { useMemo } from "react";
import { Box } from "@mui/material";
import styled from '@emotion/styled'

import { Term } from "../common/interfaces";
import SearchedTerms from "../components/SearchTerms";

const Heading = styled.div`
  padding-top: 8px;
  font-weight: bold;
  font-size: 20px;
`

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
