import { Box } from "@mui/system";
import { User } from "../common/interfaces";

interface UserDetailsProps {
  user: User;
}

const UserDetails = ({ user }: UserDetailsProps) => {
  return (
    <Box>
      <div>UserName: {user.login ?? "No username found"}</div>
      <div>Name: {user.name ?? "No name found"}</div>
      <div>Bio {user.bio ?? "No bio found"}</div>
      {user.repos?.map((repo) => (
        <div key={repo.id}>
          <div>Repo name: {repo.name}</div>
					<div>Repo Description: {repo.description ?? 'No description found'}</div>
					<div>Git url: {repo.git_url}</div>
        </div>
      ))}
    </Box>
  );
};

export default UserDetails;
