import styled from "@emotion/styled";
import { Avatar, Paper as MuiPaper, Grid as MuiGrid } from "@mui/material";
import { Box as MuiBox } from "@mui/system";
import { User, Repo } from "../common/interfaces";

interface UserDetailsProps {
  user: User;
}

const Box = styled(MuiBox)({})
const Grid = styled(MuiGrid)({})

const BoldDiv = styled.div`
  font-weight: bold;
`
const UserNameDiv = styled.div`
  color: #57606a;
`
const BasicDetailsWrapper = styled.div`
  width: 60%;
  margin-top: 8px;
  text-align: left;

  div {
    margin-top: 2px;
  }
`

const Paper = styled(MuiPaper)({
  // maxWidth: '300px',
  padding: 16,
  width: '100%',
  height: '100px',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '> div': {
    marginTop: 2
  }
})

const RootWrapper = styled(Box)({
  display: 'flex',
  gap: 16
})

const LeftSection = styled.div``
const RepoDetailsWrapper = styled.div`
  div {
    margin-top: 4px;
  }
`
const RightSection = styled.div`
  width: 100%;
`
const RepoName = styled.div`
  color: #0969da;
  font-weight: bold;
`

const AnchorTag = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
`

const UserDetails = ({ user }: UserDetailsProps) => {
  return (
    <RootWrapper mt={2}>
      <LeftSection>
        <Avatar sx={{ height: '200px', width: '200px' }} src={user.avatar_url} alt="user-avatar" />
        <BasicDetailsWrapper>
          <BoldDiv>{user.name ?? "No name found"}</BoldDiv>
          <UserNameDiv>{user.login ?? "No username found"}</UserNameDiv>
          <div>{user.bio ?? "No bio found"}</div>
        </BasicDetailsWrapper>
      </LeftSection>
      <RightSection>
        <Grid container spacing={3}>
          {user.repos?.map((repo: Repo) => (
            <Grid key={repo.id} item xs={4} sm={10}>
              <Paper>
                <RepoDetailsWrapper>
                  <RepoName>{repo.name}</RepoName>
                  <div>{repo.description ?? 'No description found'}</div>
                </RepoDetailsWrapper>
                <AnchorTag target="_blank" href={repo.html_url}>Go to repository {'->'}</AnchorTag>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </RightSection>
    </RootWrapper>
  );
};

export default UserDetails;
