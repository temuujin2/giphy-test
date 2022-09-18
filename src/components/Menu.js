import React, { useState } from 'react';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';
import Fab from "@mui/material/Fab";
import { Avatar } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import FoodImg from '../images/NicePng_plate.png'

const FoodArr = [
    'Тунатай салат',
    'Нийслэл салат',
    'Төмстэй салат',
    'Ногооны салат',
    'Өндөгний салат',
    'Тахиан махан салат',
    'Үхрийн махан салат',
    'Луувангийн салат',
    'Хүрэн манжингийн салат',
    'Органик салат',
    'Гүзээний салат',
    'Гахайн махан салат',
    'Цизар салат',
    'Самартай салат',
    'Холимог салат'
]

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export const Menu = () => {
    const [addFood, setAddFood] = useState([]);
    const [name, setName] = useState("");

    const addFoodName = (name) => {
        setAddFood((foods) => {
            return [...foods, name];
        })
    }

    const  removeFromFood = (name) => {
        setAddFood((foods) => {
            const result = [...foods];
            result.splice(
                foods.indexOf(name),
                1
            )
            return result;
        })
    }
    return (
        <Box style={{margin:'0 -30px',display:'flex',flexDirection:'column'}}>
                <Box  sx={{display:'flex'}}>
                    <input type="text" placeholder='Хоол нэмэх' onChange={(event) => setName(event.target.value)} />

                    <Button
                      sx={{height:'43.5px', marginTop:'12.4px'}}
                      variant='contained'
                      onClick={() => {
                        setAddFood([...addFood, name]);
                        setName("");
                      }}
                    >
                      Нэмэх
                    </Button>
                </Box>
            <Box sx={{background:'white', with:'100%', padding:'40px'}}>
                <Box sx={{display:'flex',flexWrap:'wrap', gap: '30px'}}>
                    {
                        addFood.map((name) => (

                        <Grid
                            item
                            xs="auto"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                position: "relative",
                                marginTop: "80px",
                            }}
                            key={name}
                        >
                            <Avatar
                                sx={{
                                    position: "absolute",
                                    top: "-40px",
                                    width: "80px",
                                    height: "80px",
                                }}
                            src={FoodImg}
                            ></Avatar>
                            <Item
                                sx={{
                                    padding: "50px 0 20px 0",
                                    width: "200px",
                                    boxShadow: "none",
                                    borderRadius:'60px 60px 10px 10px',
                                    border: "0.5px solid rgb(197, 197, 197)",
                                }}
                            >
                                {name}
                                <p style={{ fontSize: "11px" }}>Порц-1</p>
                                <Box marginTop="50px" color="black" fontWeight="500">
                                    17,000
                                    <Fab
                                        color="pink"
                                        sx={{ width: "36px", height: "10px", marginLeft: "60px" }}
                                    >

                                        <RemoveIcon color="error" onClick={() => removeFromFood(name)} />
                                    </Fab>
                                </Box>
                            </Item>
                        </Grid>
                        ))
                    }
                </Box>


                
            </Box>
            <Box sx={{display:'flex',flexWrap:'wrap', gap: '30px', justifyContent:'flex-start', marginLeft:'40px'}}>
                {
                    FoodArr.map((name) => {
                        if (addFood.includes(name)) return null;
                        return <Grid item
                        xs="auto"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            position: "relative",
                            marginTop: "80px",
                        }}
                        key={name} >
                            <Avatar
                                sx={{
                                    position: "absolute",
                                    top: "-40px",
                                    width: "80px",
                                    height: "80px",
                                }}
                            src={FoodImg}
                            ></Avatar>
                            <Item
                                sx={{
                                    padding: "50px 0 20px 0",
                                    width: "200px",
                                    boxShadow: "none",
                                    border: "0.5px solid rgb(197, 197, 197)",
                                }}
                            >
                                {name}
                                <p style={{ fontSize: "11px" }}>Порц-1</p>
                                <Box marginTop="50px" color="black" fontWeight="500">
                                    17,000
                                    <Fab
                                        color="primary"
                                        sx={{ width: "36px", height: "10px", marginLeft: "60px" }}
                                    >

                                        <AddIcon onClick={() => addFoodName(name)} />
                                    </Fab>
                                </Box>
                            </Item>
                        
                        </Grid>
                    })
                }
            </Box>
            
            
        </Box>
    );
}