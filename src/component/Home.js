import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import SettingsIcon from "@mui/icons-material/Settings";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from "react-router-dom";

import {Order} from './Order'


const drawerWidth = 220;
const menuIcons = [<DateRangeIcon/>, <DataSaverOffIcon/>, <SettingsIcon/>, <RestaurantMenuIcon/>];
const menuItemList = [{name: 'Захиалга', pathname: 'order'},
                      {name: 'График', pathname: 'graphic'},
                      {name: 'Тохиргоо', pathname: 'setting'},
                      {name: 'Меню', pathname: 'menu'}]

export default function PermanentDrawerLeft() {
  return (
    <Router>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, background:"white", color:'black' }}
      >
        <Toolbar>
          
          <Typography variant="h6" noWrap component="div" sx={{padding:"35px 0", fontWeight:"600", fontSize:'28px'}}>
            Захиалга
          </Typography>
          <Routes>
          <Route path='/order' element={<Order/>}/>
        </Routes>
        </Toolbar>
        
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: "#000027",
            color: "white",
            boxSizing: "border-box"
          }
        }}
        variant="permanent"
        anchor="left"
        >
        <Toolbar />
        <Divider />
        
        <List >
        {menuItemList.map((text, index) => (
        
        <Link  style={{textDecoration:'none', color:'white'}} to={`/${text.pathname}`}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{textDecoration:'none', paddingTop:'4px'}}>
                  <Link to={`/${text.pathname}`} style={{textDecoration:'none', color:'white'}}>
                    {menuIcons[index]}
                  </Link>
                </ListItemIcon>
                
                  {text.name}
                  
              </ListItemButton>
            </ListItem>
        </Link>
          
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 2, marginTop:"60px" }}
      >
        <Toolbar />
        
      </Box>
    </Box>
    </Router>
  );
}