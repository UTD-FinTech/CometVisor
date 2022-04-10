import * as React from 'react';
import { Typography, Chip, Button, TextField, Autocomplete, InputLabel } from "@mui/material";
import { MenuItem, FormControl, Select, ButtonGroup, Slider } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Image from "next/image"


const stockTickers = [
    { ticker: 'AAPL' },
    { ticker: 'TSLA' },
    { ticker: 'GOOG' },
    { ticker: 'TWTR' },
    { ticker: 'NFLX' },
    { ticker: 'FB' },
    { ticker: 'MSFT' },
    { ticker: 'F' },
    { ticker: 'GE' },
    { ticker: 'BABA' }
];

const marks = [
    {
      value: 0,
      label: '0%',
    },
    {
        value: 50,
        label: '50%',
    },
    {
      value: 100,
      label: '100%',
    },
  ];

const BlackLittermanModel = (props) => {

    const fixedOptions = [stockTickers[2]];
    const [value, setValue] = React.useState([...fixedOptions, stockTickers[3]]);
    const [stock1, setStock] = React.useState('');
    const [showStock, setShowStock] = React.useState(false);
    var lessThan = '<';
    var greaterThan = '>';

    const handleChange1 = (event) => {
        setStock(event.target.value);
    };

    const handleChange2 = (event) => {
        setStock(event.target.value);
    };  

    const handleChange3 = (event) => {
        setStock(event.target.value);
    };

    function valuetext(value) {
        return `${value}%`;
    }

    function absoluteClick() {
        document.getElementById('absoluteChoices').style.display = "flex";
        document.getElementById('relativeChoices').style.display = "none";
        document.getElementById('enterReset').style.display = "flex";
    }

    function relativeClick() {
        document.getElementById('relativeChoices').style.display = "flex";
        document.getElementById('absoluteChoices').style.display = "none";
        document.getElementById('enterReset').style.display = "flex";
    }

    function enterClick() {
        document.getElementById('stockPhoto').style.display = "flex";
    }

    function resetClick() {
        document.getElementById('stockPhoto').style.display = "none";
        document.getElementById('absoluteChoices').style.display = "none";
        document.getElementById('relativeChoices').style.display = "none";
        document.getElementById('enterReset').style.display = "none";
    }

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
                <Box id = "amtOfStocks" 
                sx = {{
                    width: '67vw',
                    height: '30vh',
                    borderRadius: 10,
                    minHeight: '200px',
                    border: 1,
                    borderColor: '#e0f2f1',
                    borderWidth: 3,
                    background: "linear-gradient(-152.97deg, rgba(112, 112, 112, 0.2) 0%, rgba(181, 181, 181, 0) 100%);"
                }}> 
                <Typography
                    variant="h4"
                    sx={{ marginLeft: '38%', marginRight: '30%', marginTop: '2%', display: 'flex' }}>
                    Select Stocks
                </Typography>
                <Autocomplete
                    sx = {{
                        marginTop: '5%',
                        marginLeft: '5%',
                        marginRight: '5%'
                    }}
                    multiple
                    id="stockSelect"
                    options={stockTickers}
                    limitTags={3}
                    getOptionLabel={(option) => option.ticker}
                    filterSelectedOptions
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Stock Tickers"
                        placeholder="Select Stocks"
                    />
                    )}
                />
            </Box>
            <Box id = "amtOfStocks" 
                sx = {{
                    marginTop: '5%',
                    width: '67vw',
                    height: '40vh',
                    borderRadius: 10,
                    border: 1,
                    borderColor: '#e0f2f1',
                    borderWidth: 3,
                    minHeight: '220px',
                    background: "linear-gradient(-152.97deg, rgba(112, 112, 112, 0.2) 0%, rgba(181, 181, 181, 0) 100%);"
                }}>
                <div
                    style = {{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'start',
                        marginRight: '30%',                            
                        marginLeft: '30%',
                        marginTop: '5%',
                    }}>  
                    <Button variant="outlined" onClick={() => {absoluteClick()}}>Aboslute</Button>
                    <Button variant="outlined" sx = {{marginLeft: '30%'}} onClick={() => {relativeClick()}}>Relative</Button>
                </div> 
                <div id = "absoluteChoices"
                    style = {{
                        display: 'none',
                        flexDirection: 'row',
                        alignItems: 'start',
                        marginRight: '15%',                            
                        marginLeft: '15%',
                        marginTop: '5%' 
                    }}>
                    <FormControl fullWidth>
                        <InputLabel id="stock1">Stock</InputLabel>
                        <Select
                            label="stock1"
                            onChange={handleChange1}
                            >
                            <MenuItem value={10}>AAPL</MenuItem>
                            <MenuItem value={20}>GOOG</MenuItem>
                            <MenuItem value={30}>TSLA</MenuItem>
                        </Select>
                    </FormControl>
                    <Slider
                        sx = {{marginLeft: '15%'}}
                        aria-label="percentageDifference1"
                        defaultValue={50}
                        getAriaValueText={valuetext}
                        step={1}
                        valueLabelDisplay="auto"
                        marks={marks}
                    />
                </div>
                <div id = "relativeChoices"
                    style = {{
                        display: 'none',
                        flexDirection: 'row',
                        alignItems: 'start',
                        marginRight: '5%',                            
                        marginLeft: '5%',
                        marginTop: '5%' 
                    }}>
                    <FormControl fullWidth>
                        <InputLabel id="stock2">Stock 1</InputLabel>
                        <Select
                            label="stock2"
                            onChange={handleChange2}
                            >
                            <MenuItem value={10}>AAPL</MenuItem>
                            <MenuItem value={20}>GOOG</MenuItem>
                            <MenuItem value={30}>TSLA</MenuItem>
                        </Select>
                    </FormControl>
                    <ButtonGroup variant="contained" aria-label="greaterLessThan"
                        sx = {{
                            width: '25%', marginLeft: '5%', marginTop: '1%'
                        }}>
                        <Button size="small">{lessThan}</Button>
                        <Button size="small">{greaterThan}</Button>
                    </ButtonGroup>
                    <FormControl fullWidth sx = {{marginLeft: '5%'}}>
                        <InputLabel id="stock2">Stock 2</InputLabel>
                        <Select
                            label="stock2"
                            onChange={handleChange2}
                            >
                            <MenuItem value={10}>AAPL</MenuItem>
                            <MenuItem value={20}>GOOG</MenuItem>
                            <MenuItem value={30}>TSLA</MenuItem>
                        </Select>
                    </FormControl>
                    <Slider
                        sx = {{marginLeft: '5%'}}
                        aria-label="percentageDifference2"
                        defaultValue={50}
                        getAriaValueText={valuetext}
                        step={1}
                        valueLabelDisplay="auto"
                        marks={marks}
                    />
                </div>
                <div id = "enterReset"
                    style = {{
                        display: 'none',
                        flexDirection: 'row',
                        alignItems: 'start',
                        marginRight: '30%',                            
                        marginLeft: '30%',
                        marginTop: '5%',
                        marginBottom: '5%'
                    }}>  
                        <Button variant="contained" color="success" size="large" 
                            endIcon={<SendIcon />} onClick={() => {enterClick()}}>Enter</Button>
                        <Button variant="outlined" color="error" size ="large" startIcon={<DeleteIcon />}
                             sx={{marginLeft: '25%'}} onClick={() => {resetClick()}}>Reset</Button>
                </div> 
            </Box>  
            <Box id = "graph" 
                sx = {{
                    width: '67vw',
                    height: '60vh',
                    borderRadius: 10,
                    border: 1,
                    marginTop: '5%',
                    borderColor: '#e0f2f1',
                    borderWidth: 3,
                    background: "linear-gradient(-152.97deg, rgba(112, 112, 112, 0.2) 0%, rgba(181, 181, 181, 0) 100%);"
                }}>   
                <div id="stockPhoto" style = {{marginLeft: '30%', marginRight:'30%', 
                    marginTop: '5%', marginBottom: '5%', display: 'none'}}>  
                    <Image
                        alt="logo"
                        src="/sampleGraph.png"
                        height= '400%'
                        width= '400%'
                    />
                </div>    
            </Box>  
            </div>
        </div>
    )
}

export default BlackLittermanModel;