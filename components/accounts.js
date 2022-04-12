import * as React from 'react';
import { CardMedia, Typography, Divider, ThemeProvider, createTheme } from "@mui/material";
import ActivityRow from './webComponents/ActivityRow'
import Box from '@mui/material/Box';

const Accounts = (props) => {
    const DailyData = [
        { time: '8:00 AM', price: '326.45' },
        { time: '8:15 AM', price: '323.70' },
        { time: '8:30 AM', price: '317.25' },
        { time: '8:45 AM', price: '318.56' },
        { time: '9:00 AM', price: '320.45' },
        { time: '9:15 AM', price: '319.35' },
        { time: '9:30 AM', price: '325.67' },
        { time: '9:45 AM', price: '328.95' },
        { time: '10:00 AM', price: '330.12' },
        { time: '10:15 AM', price: '329.54' },
        { time: '10:30 AM', price: '329.19' },
        { time: '10:45 AM', price: '327.40' },
        { time: '11:00 AM', price: '333.33' },
        { time: '11:15 AM', price: '331.87' },
        { time: '11:30 AM', price: '332.94' },
        { time: '11:45 AM', price: '326.89' },
        { time: '12:00 PM', price: '332.49' },
    ];


    const CheckingsData = [
        { time: '8:00 AM', price: '3246.45' },
        { time: '8:15 AM', price: '325.70' },
        { time: '8:30 AM', price: '3175.25' },
        { time: '8:45 AM', price: '313.56' },
        { time: '9:00 AM', price: '3235.45' },
        { time: '9:15 AM', price: '314.35' },
        { time: '9:30 AM', price: '325.67' },
        { time: '9:45 AM', price: '328.95' },
        { time: '10:00 AM', price: '370.12' },
        { time: '10:15 AM', price: '329.54' },
        { time: '10:30 AM', price: '3259.19' },
        { time: '10:45 AM', price: '327.40' },
        { time: '11:00 AM', price: '333.33' },
        { time: '11:15 AM', price: '333.87' },
        { time: '11:30 AM', price: '332.94' },
        { time: '11:45 AM', price: '326.89' },
        { time: '12:00 PM', price: '1923.28' },
    ];

    return (   
    <div>
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                marginRight: '5%',                            
                marginLeft: '5%',
                marginTop: '0%',
                width: '95%',
                }}
            >   
            <Box id = "investValue"
                sx= {{
                    width: '67vw',
                    height: '50vh',
                    borderRadius: 10,
                    minHeight: '200px',
                    border: 1,
                    borderColor: '#e0f2f1',
                    borderWidth: 3,
                    background: "linear-gradient(-152.97deg, rgba(112, 112, 112, 0.2) 0%, rgba(181, 181, 181, 0) 100%);"
                }}>
                <Typography variant="h6"
                    sx={{
                        marginTop: '2%',
                        marginLeft: '2%',
                        color: 'gray',
                }}>Invest Value</Typography>
                <Typography
                    variant="h3"
                    sx={{ marginLeft: '2%', color: 'black' }}>
                    ${DailyData[DailyData.length - 1].price}
                </Typography>
                <CardMedia
                    component="img"
                    height="200"
                    image=""
                    alt="portfolio balance"
                />
            </Box>
            <Box id = "checking"
                sx= {{
                    marginTop: '5%',
                    width: '67vw',
                    height: '50vh',
                    borderRadius: 10,
                    minHeight: '200px',
                    border: 1,
                    borderColor: '#e0f2f1',
                    borderWidth: 3,
                    background: "linear-gradient(-152.97deg, rgba(112, 112, 112, 0.2) 0%, rgba(181, 181, 181, 0) 100%);"
                }}>
                <Typography variant="h6"
                    sx={{
                        marginTop: '2%',
                        marginLeft: '2%',
                        color: 'gray',
                }}>Checkings</Typography>
                <Typography
                    variant="h3"
                    sx={{ marginLeft: '2%', color: 'black' }}>
                    ${CheckingsData[CheckingsData.length - 1].price}
                </Typography>
                <CardMedia
                    component="img"
                    height="200"
                    image=""
                    alt="checkings"
                />    
            </Box>
        </div>
    </div>              
    )
}

export default Accounts;
