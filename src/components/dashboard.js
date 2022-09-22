import React from "react";
import { useUserContext } from "../context/userContext";
import { Button } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import LogoSvg from "../images/Logo.svg";
import HomeIcon from '@mui/icons-material/Home';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { Home } from "./Home";
import { Order } from "./Order"
import { Graphic } from "./Graphic";
import { Setting } from "./Setting";
import { Menu } from "./Menu";

const drawerWidth = 240;
const menuIcons = [<HomeIcon />, <NoteAltIcon />, <AssessmentIcon />, <ManageAccountsIcon />, <FoodBankIcon />];
const menuItemList =
  [{ name: 'Нүүр', pathname: '' },
  { name: 'Захиалга', pathname: 'order' },
  { name: 'График', pathname: 'graphic' },
  { name: 'Тохиргоо', pathname: 'setting' },
  { name: 'Меню', pathname: 'menu' }]


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>

        <CssBaseline />
        <AppBar sx={{ boxShadow: 'none', borderBottom: '1px solid #ccc' }} position="fixed" open={open} >

          <Toolbar sx={{ background: 'white', color: 'black' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="p" noWrap component="div" display="flex" gap="20px" alignItems="center" position='absolute' right="20px">
              <Box display='flex' flexDirection='column' alignItems='center'>
                <Typography color="#000723">{user.displayName}</Typography>
                <Typography sx={{ fontSize: '11px' }}>{user.email}</Typography>
              </Box>
              <Button sx={{ height: '30px' }} variant="outlined" onClick={logoutUser}>Гарах</Button>
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              background: '#000723',
              color: 'white',
              fill: 'white',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >

          <DrawerHeader sx={{ position: 'relative' }}>
            <img style={{ position: 'absolute', height: '50px', left: '60px', top: '20px' }} src={LogoSvg} />
            <IconButton sx={{ color: 'white' }} onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>

          <List sx={{ marginTop: '40px' }}>
            {menuItemList.map((text, index) => (

              <Link style={{ textDecoration: 'none', color: 'white', fontSize: '14px' }} to={`/${text.pathname}`}>
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ textDecoration: 'none', paddingTop: '4px' }}>
                      <Link to={`/${text.pathname}`} style={{ textDecoration: 'none', color: 'white' }}>
                        {menuIcons[index]}
                      </Link>
                    </ListItemIcon>

                    {text.name}

                  </ListItemButton>
                </ListItem>

              </Link>

            ))}

          </List>

        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/order' element={<Order />} />
            <Route path='/graphic' element={<Graphic />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='*' element={<h1>404 not found</h1>} />
          </Routes>
        </Main>
      </Box>
    </Router >
  );
}

export default Dashboard;
