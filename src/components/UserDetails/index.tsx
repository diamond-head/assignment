import { Grid } from "@mui/material";
import {
  RootWrapper,
  LeftSection,
  Avatar,
  BasicDetailsWrapper,
  BoldDiv,
  UserNameDiv,
  RightSection,
  Paper,
  RepoDetailsWrapper,
  RepoName,
  AnchorTag
} from "./user-details.styled";
import { User, Repo } from "../../interfaces";

interface UserDetailsProps {
  user: User;
}

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
        <Grid container spacing={3}>
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
