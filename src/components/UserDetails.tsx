import styled from "@emotion/styled";
import { Avatar as MuiAvatar, Paper as MuiPaper, Grid } from "@mui/material";
import { Box as MuiBox } from "@mui/system";
import { User, Repo } from "../common/interfaces";

interface UserDetailsProps {
  user: User;
}

const Box = styled(MuiBox)({})

const BoldDiv = styled.div`
  font-weight: bold;
`
const UserNameDiv = styled.div`
  color: #57606a;
`
const BasicDetailsWrapper = styled.div`
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

const Paper = styled(MuiPaper)({  
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

const RootWrapper = styled(Box)({
  display: 'flex',
  gap: 16,
  marginTop: 16,
  '@media (max-width: 720px)': {
    flexWrap: 'wrap'
  }
})
const Avatar = styled(MuiAvatar)({
  height: 200,
  width: 200,
  '@media (max-width: 720px)': {
    height: 60,
    width: 60,
  }
})

const LeftSection = styled.div`
  @media (max-width: 720px) {
    display: flex;
    gap: 8px;
  }
`

const RepoDetailsWrapper = styled.div`
  div {
    margin-top: 4px;
  }
`

const RightSection = styled.div`
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
    <RootWrapper>
      <LeftSection>
        <Avatar src={user.avatar_url} alt="user-avatar" />
        <BasicDetailsWrapper>
          <BoldDiv>{user.name ?? "No name found"}</BoldDiv>
          <UserNameDiv>{user.login ?? "No username found"}</UserNameDiv>
          <div>{user.bio ?? "No bio found"}</div>
        </BasicDetailsWrapper>
      </LeftSection>
      <RightSection>
        <BoldDiv>Repositories</BoldDiv>
        <Grid 
          container spacing={3} 
          // rowSpacing={3} columnSpacing={{ sm: 0, md: 3, lg: 3 }}
        >
          {user.repos?.map((repo: Repo) => (
            <Grid key={repo.id} item xs={12} sm={10} md={6} lg={4}>
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
