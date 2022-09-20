import styled from "@emotion/styled";
import { TextField as MuiTextField } from "@mui/material";

export const FormWrapper = styled.div`
  display: flex;
  gap: 8px;
`

export const TextField = styled(MuiTextField)({
  width: "100%",
  maxWidth: 700,
  '@media (max-width: 420px)': {
    maxWidth: 320
  }
});