import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend
} from 'recharts';
import { Box, margin, padding } from '@mui/system';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';



const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];

const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
];
const chartData = [
    {
        name: 'Monday',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Tuesday',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Wednesday',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Thursday',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Friday',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Saturday',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Sanday',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#ffe942'];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    height: '100px',
    color: theme.palette.text.secondary,
}));

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export const Home = () => {
    return (
        <Box display="flex" flexDirection="column" gap={5} mt={4}>
            <Box sx={{ flexGrow: 1 }}>
                <Typography mt={-5} position="absolute">General Report</Typography>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Item sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 15px', boxShadow: '2px 2px 8px rgb(235, 235, 235)' }}>
                            <Box>
                                <ShoppingCartOutlinedIcon fontSize='large' color='primary' />
                                <h3>400</h3>
                                <p style={{ fontSize: '12px', position: 'absolute' }}>Item Sales</p>
                            </Box>
                            <Box >
                                <Box sx={{ background: '#0088FE', color: 'white', height: '30px', padding: '5px 10px', borderRadius: '15px' }}>
                                    33% ⌃
                                </Box>

                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Item sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 15px', boxShadow: '2px 2px 8px rgb(235, 235, 235)' }}>
                            <Box>
                                <CreditCardOutlinedIcon fontSize='large' sx={{ color: 'rgb(255, 201, 77)' }} />
                                <h3>200</h3>
                                <p style={{ fontSize: '12px', position: 'absolute' }}>New Orders</p>
                            </Box>
                            <Box>
                                <Box sx={{ background: '#FF8042', color: 'white', height: '30px', padding: '5px 10px', borderRadius: '15px' }}>
                                    17% ⌃
                                </Box>

                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Item sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 15px', boxShadow: '2px 2px 8px rgb(235, 235, 235)' }}>
                            <Box>
                                <DesktopWindowsOutlinedIcon fontSize='large' sx={{ color: 'rgb(255, 201, 77)' }} />
                                <h3>300</h3>
                                <p style={{ fontSize: '12px', position: 'absolute' }}>Total Product</p>
                            </Box>
                            <Box>
                                <Box sx={{ background: '#00C49F', color: 'white', height: '30px', padding: '5px 10px', borderRadius: '15px' }}>
                                    25% ⌃
                                </Box>

                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Item sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 15px', boxShadow: '2px 2px 8px rgb(235, 235, 235)' }}>
                            <Box>
                                <PersonAddAltOutlinedIcon fontSize='large' sx={{ color: 'rgb(255, 201, 77)' }} />
                                <h3>10,000</h3>
                                <p style={{ fontSize: '12px', position: 'absolute' }}>Unique Visitor</p>
                            </Box>
                            <Box>
                                <Box sx={{ background: '#65b620', color: 'white', height: '30px', padding: '5px 10px', borderRadius: '15px' }}>
                                    22% ⌃
                                </Box>

                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} display="flex" gap={5} mt={4}>
                <Box position="relative" sx={{ width: '250px', height: '350px', boxShadow: '2px 2px 8px rgb(235, 235, 235)', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <Typography mt={-5} position="absolute">Weekly Top Seller</Typography>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx="30%"
                            cy="30%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={1}
                        position="absolute"
                        bottom={80}
                        left={20} >
                        <b style={{ color: '#0088FE', fontSize: '40px' }}> • </b>
                        <p> Item Sales . . . . . . . . . 33%</p>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={1}
                        position="absolute"
                        bottom={50}
                        left={20} >
                        <b style={{ color: '#00C49F', fontSize: '40px' }}> • </b>
                        <p> Total Product . . . . . . . 25%</p>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={1}
                        position="absolute"
                        bottom={20}
                        left={20} >
                        <b style={{ color: '#FFBB28', fontSize: '40px' }}> • </b>
                        <p> New Orders . . . . . . . .  25%</p>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={1}
                        position="absolute"
                        bottom={-10}
                        left={20} >
                        <b style={{ color: '#FF8042', fontSize: '40px' }}> • </b>
                        <p> New Orders . . . . . . . . 17%</p>
                    </Box>
                </Box>
                <Box sx={{ width: '280px', height: '350px', boxShadow: '2px 2px 8px rgb(235, 235, 235)', borderRadius: '10px', display: 'flex', justifyContent: 'space-between' }}>
                    <Typography mt={-5} position="absolute">Sales Report</Typography>
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={false}
                            data={data01}
                            cx="35%"
                            cy="30%"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />
                        <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                        <Tooltip />
                    </PieChart>
                </Box>
                <Grid sx={{ minWidth: '50%', maxWidth: '350px', overflow: 'scroll', height: '350px', boxShadow: '2px 2px 8px rgb(235, 235, 235)', borderRadius: '10px', display: 'flex', justifyContent: 'space-between' }}>
                    <Typography mt={-5} position="absolute">Best Sales</Typography>
                    <BarChart
                        width={700}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 30,
                            right: 30,
                            left: 20,
                            bottom: 0,
                        }}
                        barSize={20}
                    >
                        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                    </BarChart>
                </Grid>
            </Box>
        </Box>
    )
}