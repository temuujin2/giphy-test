import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Avatar, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { height, width } from '@mui/system';
import FoodImg from '../images/NicePng_plate.png'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export const Menu = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'column'}}>
    <Breadcrumbs>
    <Link sx={{color:'inherit', textDecoration:'none', fontSize:'14px'}} href='/'>Нүүр</Link>
      <Typography color="text.primary">Меню</Typography>
    </Breadcrumbs>
      <Box sx={{ flexGrow: 1, marginTop:'10px' }}>
          <Grid container spacing={3}>
          {Array.from(Array(16)).map((_, index) => (
            <Grid item xs='auto' sx={{display:'flex',flexDirection:'column', alignItems:'center', position:'relative', marginTop:'80px'}} key={index}>
              <Avatar sx={{position:'absolute', top:'-20px', width:'80px', height:'80px'}} src={FoodImg}></Avatar>
              <Item sx={{padding:'50px 0 20px 0', width:'200px', boxShadow:'none', border:'0.5px solid rgb(197, 197, 197)'}}>
                Тунатай салат
              <p style={{fontSize:'11px'}}>Порц-1</p> 
              <Box marginTop='50px' color='black' fontWeight='500'>17,000 
                <Fab color='primary' sx={{width:'36px', height:'10px', marginLeft: '60px'}}>
                <AddIcon sx={{width:'15px'}}/>
                </Fab>
                  

               </Box>
              </Item>
              
            </Grid>
             ))}
          </Grid>
        </Box>
        
    </Box>
  );
}