import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FoodBankIcon from '@mui/icons-material/FoodBank';

import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from "react-router-dom";
import { SearchAppBar } from "../TopNav";
import Logo from '../images/food-logo.png'

import {Order} from './Order'
import { Graphic } from "./Graphic";
import { Setting } from "./Setting";
import { Menu } from "./Menu";


const drawerWidth = 200;
const menuIcons = [<NoteAltIcon/>, <AssessmentIcon/>, <ManageAccountsIcon/>, <FoodBankIcon/>];
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
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, background:"white", color:'black', boxShadow:'none', border:'none' }}
      >
          <SearchAppBar/>
      </AppBar>
      <Drawer
        sx={{
          borderRadius: '50px',
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: "#290758",
            color: "white",
            boxSizing: "border-box"
          }
        }}
        variant="permanent"
        anchor="left"
        >
        <Toolbar sx={{backgroundColor:"#33007b"}}>
          <img src={Logo}></img><b style={{margin:'5px 0 0 10px', fontSize:'17px'}}>Food Card</b>
        </Toolbar>
        <Divider />
        
        <List >
        {menuItemList.map((text, index) => (
        
        <Link  style={{textDecoration:'none', color:'white', fontSize:'14px'}} to={`/${text.pathname}`}>
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
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 2 }}
      >
        <Toolbar />
        <Routes>
          <Route path='/order' element={<Order/>}/>
          <Route path='/graphic' element={<Graphic/>}/>
          <Route path='/setting' element={<Setting/>}/>
          <Route path='/menu' element={<Menu/>}/>
        </Routes>
      </Box>
    </Box>
    </Router>
  );
}