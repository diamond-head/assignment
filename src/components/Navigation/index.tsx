import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material"
import { Link, Button } from './navigation.styled'

interface INavItem {
  path: string;
  text: string;
}

const navItems: Array<INavItem> = [
  { path: '/', text: 'Home' },
  { path: '/history', text: 'History' }
]

const Navigation = () => {
  return (
    <React.Fragment>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >
            Demo app
          </Typography>
          <Box sx={{ display: { sm: 'block' } }}>
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
    </React.Fragment>
  )
};

export default Navigation;
