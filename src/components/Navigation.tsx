import styled from "@emotion/styled";
import { List as MuiList, ListItem as MuiListItem } from "@mui/material";
import { Link } from "react-router-dom";

const List = styled(MuiList)({
  display: 'flex',
	flexDirection: 'row',
	gap: 2,
});

const ListItem = styled(MuiListItem)({
	width: 'auto',
})

const Navigation = () => {

  return (
    <List>
      <ListItem>
        <Link to="/">Home</Link>
      </ListItem>
      <ListItem>
        <Link to="/history">History</Link>
      </ListItem>
    </List>
  );
};

export default Navigation;
