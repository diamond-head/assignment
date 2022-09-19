import styled from "@emotion/styled";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button as MuiButton
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Link = styled(RouterLink)({
  textDecoration: 'none'
})

const Button = styled(MuiButton)({
  color: '#fff'
})

interface INavItem {
  path: string;
  text: string
}

const Navigation = () => {
  const navItems: Array<INavItem> = [
    { path: '/', text: 'Home' },
    { path: '/history', text: 'History' }
  ]

  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Demo app
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item: INavItem, index: number) => (
            <Link to={item.path} key={item.text + index}>
              <Button>
                {item.text}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
};

export default Navigation;
