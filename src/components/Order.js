import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import OrderList from './OrderList';


const categories = ["Савласан", "Хүргэсэн", "Алдаатай"];
const days = ['Даваа', 'Магмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба']



export const Order = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            
            <Breadcrumbs>
                <Link sx={{ color: 'inherit', textDecoration: 'none', fontSize: '14px' }} href='/'>Нүүр</Link>
                <Typography color="text.primary">Захиалга</Typography>
            </Breadcrumbs>
            <OrderList />
            <Box sx={{ flexGrow: 1, p: 2}}>
                {categories.map((_, index) => (
                <Grid key={index}
                    container
                    spacing={5}
                    sx={{
                        marginTop: '10px',
                        '--Grid-borderWidth': '1px',
                        borderTop: 'var(--Grid-borderWidth) solid',
                        borderLeft: 'var(--Grid-borderWidth) solid',
                        borderColor: 'divider',
                        '& > div': {
                            borderRight: 'var(--Grid-borderWidth) solid',
                            borderBottom: 'var(--Grid-borderWidth) solid',
                            borderColor: 'divider',
                        },
                    }}
                >

                    {days.map((_, index) => (
                        <Grid key={index} {...{ xs: 12, sm: 6, md: 4, lg: 2 }} minHeight={400} width={"100vw"} backgroundColor="#F5F5F7">
                            <Box sx={{ width: '100%', height: '40px', background: 'white', padding: '10px 0 0 15px' }}>{days[index]}</Box>
                        </Grid>

                    ))}
                </Grid>
                ))}

            </Box>
                        
        </Box>
    );
}