import * as React from 'react';
import { CardMedia, Typography } from "@mui/material";
import Box from '@mui/material/Box';

const Accounts = (props) => {
    return (   
    <div>       
        <Box id = "investValue"
            sx= {{
                position: 'absolute',
                width: '70.5vw',
                height: '60vh',
                left: '25vw',
                top: '15vh',
                blend: 'pass through',
                background: "linear-gradient(152.97deg, rgba(112, 112, 112, 0.2) 0%, rgba(181, 181, 181, 0) 100%);",       
                borderRadius: '50px'
            }}>
            <Typography variant="h5" style={{margin: 20}}>Invest Value</Typography>
            <Typography variant="h3" style={{margin: 20}}>$1,436.52</Typography>
            <Typography variant="h6" style={{margin: 20}}>24h | UP 8.39</Typography>
            <CardMedia
                component="img"
                height="200"
                image=""
                alt="stock growth picture"
            />
        </Box>
        <Box id = "checking"
            sx= {{
                position: 'absolute',
                width: '70.5vw',
                height: '60vh',
                left: '25vw',
                top: '85vh',
                blend: 'pass through',
                background: "linear-gradient(152.97deg, rgba(112, 112, 112, 0.2) 0%, rgba(181, 181, 181, 0) 100%);",       
                borderRadius: '50px'
            }}>
            <Typography variant="h5" style={{margin: 20}}>Checkings</Typography>
            <Typography variant="h3" style={{margin: 20}}>$535.82</Typography>
            <Typography variant="h6" style={{margin: 20}}>24h | UP 13.39</Typography>
            <CardMedia
                component="img"
                height="200"
                image=""
                alt="checkings picture"
            />    
        </Box>
    </div>              
    )
}

export default Accounts;
