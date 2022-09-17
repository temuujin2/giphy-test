import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Graphic = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Breadcrumbs>
                <Link sx={{ color: 'inherit', textDecoration: 'none', fontSize: '14px' }} href='/'>Нүүр</Link>
                <Typography color="text.primary">График</Typography>
            </Breadcrumbs>
            <Box sx={{ flexGrow: 1, marginTop: '10px' }}>
                <Grid container spacing={3}>
                    <Grid item xs="auto">
                        <Item>variable width content</Item>
                    </Grid>
                    <Grid item xs="auto">
                        <Item>variable width content</Item>
                    </Grid>

                </Grid>
            </Box>

        </Box>
    );
}