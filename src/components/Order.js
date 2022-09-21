import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import OrderList from './OrderList';
import Frame from '../images/Frame.svg'
// import CustomizedAccordions from './Accordion'
import { CustomizedAccordions } from './Accordion'


const categories = ["Савласан", "Хүргэсэн", "Алдаатай"];
// const days = [{day: 'Даваа', boxes: 2}, 
//             {day: 'Магмар', boxes: 3}, 
//             {day: 'Лхагва', boxes: 4},
//             {day: 'Пүрэв', boxes: 1},
//             {day: 'Баасан', boxes: 2},
//             {day: 'Бямба', boxes: 5}
//             ]
const days = ['Даваа',
    'Магмар',
    'Лхагва',
    'Пүрэв',
    'Баасан',
    'Бямба'
]



export const Order = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Breadcrumbs>
                <Link sx={{ color: 'inherit', textDecoration: 'none', fontSize: '14px' }} href='/'>Нүүр</Link>
                <Typography color="text.primary">Захиалга</Typography>
            </Breadcrumbs>
            <OrderList />
            <Box sx={{ flexGrow: 1, p: 2 }}>
                {categories.map((_, index) => (
                    <Grid key={index}
                        container
                        spacing={5}
                        sx={{
                            display: 'flex',
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
                        <Typography position="absolute" margin="7px 0 0 7px">
                            {categories[index]}
                        </Typography>

                        {days.map((_, index) => (
                            <Grid key={index} {...{ xs: 12, sm: 6, md: 4, lg: 2 }} minHeight={"300px"} width={"100vw"} backgroundColor="#F5F5F7" display='flex' textAlign="end" justifyContent="space-between">
                                <Box sx={{ width: '100%', height: '40px', background: 'white', padding: '10px 0 0 15px' }}> <img style={{ marginRight: '40px' }} src={Frame} /> </Box>
                                <Box position="absolute" width="100%" display="flex">
                                    <CustomizedAccordions />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                ))}
            </Box>

        </Box>
    );
}