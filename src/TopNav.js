import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import myPic from './images/my-pic.jpg'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.07),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.07),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

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
    paddingLeft: `calc(2em + ${theme.spacing(4)})`,
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

const customTheme = createTheme({
    palette: {
      primary: {
        main: deepPurple[500]
      }
    }
  });
  
  const StyledAvatar = styled(Avatar)`
    ${({ theme }) => `
    cursor: pointer;
    transition: ${theme.transitions.create(["background-color", "transform"], {
      duration: theme.transitions.duration.standard
    })};
    &:hover {
      background-color: ${theme.palette.secondary.main};
      transform: scale(1.3);
    }
    `}
  `;

export const SearchAppBar = () => {
  const value = 5;
  return (
    <ThemeProvider theme={customTheme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{boxShadow:'none'}}>
        <Toolbar sx={{background:"white", color:'gray'}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Танд энэ өдрийн мэнд
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{color:'rgb(17, 17, 17)', 
                    marginLeft:'10px', 
                    display:'flex', 
                    flexDirection:'column', 
                    alignItems:'center'
                   }}>
                
            </Box>
            <Box sx={{display:'flex', gap:'30px',alignItems:'center' , width:'200px', boxShadow:'1px 1px 3px rgba(0,0,0,0.2)', borderRadius:'5px'}}>
                <StyledAvatar sx={{borderRadius:'5px 0 0 5px', height:'40px', width:'40px'}} alt="Remy Sharp" src={myPic} />
                <Box sx={{fontSize:'14px', display:'flex', flexDirection:'column'}}>
                    <Box sx={{fontWeight:'bold', fontSize:'12px', textAlign:'center'}}>E. Temuujin</Box>
                    <Rating
                      name="text-feedback"
                      value={value}
                      readOnly
                      size='small'
                      precision={0.5}
                      emptyIcon={<StarIcon style={{ opacity: 0.55}} fontSize="inherit" />}
                    />
                </Box>
            </Box>
          
          
        </Toolbar>
        
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}