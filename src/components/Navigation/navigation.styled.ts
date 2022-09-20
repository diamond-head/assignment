import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";
import {
  Button as MuiButton,
} from "@mui/material";

export const Link = styled(RouterLink)({
  textDecoration: 'none'
})

export const Button = styled(MuiButton)({
  color: '#fff'
})