import styled from "@emotion/styled";
import { Avatar as MuiAvatar, Paper as MuiPaper } from "@mui/material";
import { Box as MuiBox } from "@mui/system";

export const Box = styled(MuiBox)({})

export const BoldDiv = styled.div`
  font-weight: bold;
`
export const UserNameDiv = styled.div`
  color: #57606a;
`
export const BasicDetailsWrapper = styled.div`
  text-align: left;
  font-size: 14px;
  @media (min-width: 720px) {
    width: 60%;
    font-size: 16px;
    margin-top: 8px;
  }

  div {
    margin-top: 2px;
  }
`

export const Paper = styled(MuiPaper)({  
  padding: 16,
  height: '100px',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '> div': {
    marginTop: 2
  }
})

export const RootWrapper = styled(Box)({
  display: 'flex',
  gap: 16,
  marginTop: 16,
  '@media (max-width: 720px)': {
    flexWrap: 'wrap'
  }
})
export const Avatar = styled(MuiAvatar)({
  height: 200,
  width: 200,
  '@media (max-width: 720px)': {
    height: 60,
    width: 60,
  }
})

export const LeftSection = styled.div`
  @media (max-width: 720px) {
    display: flex;
    gap: 8px;
  }
`

export const RepoDetailsWrapper = styled.div`
  div {
    margin-top: 4px;
  }
`

export const RightSection = styled.div`
  width: 100%;
  @media (max-width: 720px) {
    border-top: 1px solid rgba(0, 0, 0, .1);
  }

  > div:first-child {
    text-align: left;
    margin-bottom: 8px;
    @media (max-width: 720px) {
      padding-top: 8px;
    }
  }
`
export const RepoName = styled.div`
  color: #0969da;
  font-weight: bold;
`

export const AnchorTag = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
`
