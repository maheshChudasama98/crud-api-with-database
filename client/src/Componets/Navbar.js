import * as React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { Link } from "react-router-dom";

const drawerWidth = 240;
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function Navbar() {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const openmenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <>
      <Box sx={{ display: 'flex' }} className="m-5">

        <ThemeProvider theme={darkTheme}>
          <AppBar  open={open}  >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                YUG


              </Typography>

              <Button
                id="basic-button"
                className=' text-dark bg-light'
                aria-controls={openmenu ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openmenu ? 'true' : undefined}
                onClick={handleClick}
              >
                list
              </Button>

              <Menu
                id="basic-menu"
                className=' color-dark'
                anchorEl={anchorEl}
                open={openmenu}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}> <Link to="/form" className='nav-link '> add</Link>  </MenuItem>
                <MenuItem onClick={handleClose} > <Link to="/api" className='nav-link '> Api</Link></MenuItem>
                <MenuItem onClick={handleClose}> <Link to="/login" className='nav-link '> logout</Link></MenuItem>
                <MenuItem onClick={handleClose}> <Link to="/users" className='nav-link '> user</Link></MenuItem>
                <MenuItem onClick={handleClose}> <Link to="/myapi" className='nav-link '> my Api</Link></MenuItem>
              </Menu>

              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Toolbar>
          </AppBar>


        </ThemeProvider>



        <Drawer
          sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', }, }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <div className='color-dark h3 border-bottom text-center py-2'>YUG
            <IconButton className="float-end" onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>




        </Drawer>
      </Box>
      {/* <div className="mb-5">sd</div> */}
    </>

  );
}