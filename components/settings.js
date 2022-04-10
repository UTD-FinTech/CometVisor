import * as React from 'react';
import { Divider, FormControl, InputLabel, Typography, Avatar, Select } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField, FormControlLabel, MenuItem, Checkbox, FormGroup } from "@mui/material";
import { borderColor, textAlign } from '@mui/system'; 


const Settings = (props) => {
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
      <Box id = "accountInfo"
        sx={{
          width: '67vw',
          height: '65vh',
          borderRadius: 10,
          minHeight: '500px',
          border: 1,
          borderColor: '#e0f2f1',
          borderWidth: 3,
          background: "linear-gradient(-152.97deg, rgba(112, 112, 112, 0.2) 0%, rgba(181, 181, 181, 0) 100%);"
        }}>
        <Typography variant="h4" style={{margin: 20, display: 'flex'}}>Account Information</Typography>
        <Divider sx={{marginLeft: "6%", marginRight: "6%"}} />
        <Box id = "profilePicture" 
          sx={{
            width: '7.5vw',
            height: '15vh',
            marginLeft: '10%',
            marginTop: '3%' 
        }}>
          <Avatar sx={{ width: "5.5vw", height: "5.5vw", bgcolor: "salmon", marginLeft: "10%", marginCenter: "10%", fontSize: "35px"}}>SR</Avatar>  
          <Button size = "small"> Edit Profile Picture </Button>
        </Box>
        <Box id = "firstNameField"
          sx={{
            width: '30vw',
            height: '10vh',
            marginLeft: '32.7%',
            marginTop: '-13%',
            display: 'flex'
          }}>
            <TextField fullWidth id="first" variant="outlined" label="First Name"/>
        </Box> 
        <Box id = "lastNameField"
          sx={{
            width: '30vw',
            height: '10vh',
            marginLeft: '32.7%',
            marginTop: '0%',
            display: 'flex'
          }}>
            <TextField fullWidth id="last" variant="outlined" label="Last Name"/>
        </Box> 
        <Box id = "emailField"
          sx={{
            width: '30vw',
            height: '10vh',
            marginLeft: '32.7%',
            marginTop: '0%', 
            display: 'flex'
          }}>
            <TextField fullWidth id="email" variant="outlined" label="Email"/>
        </Box>  
        <Box id = "passwordField"
          sx={{
            width: '30vw',
            height: '10vh',
            marginLeft: '32.7%',
            marginTop: '0%', 
            display: 'flex'
          }}>
            <TextField fullWidth id="password" variant="outlined" label="Password"/>
        </Box>
        <Box id = "submitChanges"
          sx={{
            width: '30vw',
            height: '10vh',
            marginLeft: '32.7%',
            marginTop: '0%'
          }}>
            <Button variant="contained" sx={{display: 'flex'}}>Save Changes</Button>
        </Box>                  
      </Box>
      <div
        style = {{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '5%'
        }}
      >
        <Box id="notifications"
          sx={{
            width: '32vw',
            height: '40vh',
            borderRadius: 10,
            minHeight: '300px',
            border: 1,
            borderColor: '#e0f2f1',
            borderWidth: 3,
            background: "linear-gradient(-152.97deg, rgba(112, 112, 112, 0.2) 0%, rgba(181, 181, 181, 0) 100%);"
          }}> 
          <Typography variant="h4" style={{margin: 20}}>Notifications</Typography>
          <Divider sx={{marginLeft: "6%", marginRight: "6%"}} />
          <Typography variant="h6" style={{margin: 15}}>Email Notifications</Typography>
          <Box id="notifOptions"
            sx={{
              width: '15vw',
              height: '40vh',
              margin: '1vw',
              display: 'flex'
            }}>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label="Weekly Report"/>
              <FormControlLabel control={<Checkbox/>} label="Weekly Newsletter"/>
              <FormControlLabel control={<Checkbox/>} label="Password Change"/>
            </FormGroup>
          </Box>
        </Box>

        <Box id="paymentInfo"
          sx={{
            width: '35vw',
            height: '40vh',
            borderRadius: 10,
            minHeight: '300px',
            border: 1,
            marginLeft: '5%',
            borderColor: '#e0f2f1',
            borderWidth: 3,
            background: "linear-gradient(-152.97deg, rgba(112, 112, 112, 0.2) 0%, rgba(181, 181, 181, 0) 100%);"
          }}>
          <Typography variant="h4" style={{margin: 20}}>Payment Methods</Typography>
          <Divider sx={{marginLeft: "1%", marginRight: "1%"}} /> 
          <BasicSelect sx={{display: 'flex', width: '30vw'}}></BasicSelect>
          <Divider sx={{marginLeft: "1%", marginRight: "1%"}} /> 
          <Box id = "addPayment"
            sx={{
              marginTop: "6%",
            }}>
            <Button sx={{marginLeft: "25%"}} variant="outlined">Add New Payment Method</Button>
          </Box>
        </Box>
      </div>
      </div>
    </div>      
  )
};

function BasicSelect() {
  const [card, setPaymentMethod] = React.useState('');

  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <Box sx={{ margin: 4 }}>
      <FormControl fullWidth>
        <InputLabel id="paymentSelect">Current Method</InputLabel>
        <Select
          labelId="paymentSelect"
          value={card}
          label="paymentMethod"
          onChange={handleChange}
        >
          <MenuItem value={1234}>Wells Fargo - 1234</MenuItem>
          <MenuItem value={9876}>Visa - 9876</MenuItem>
          <MenuItem value={5555}>MasterCard - 5555</MenuItem>
        </Select>
      </FormControl>
    </Box> 
  );  
}

export default Settings;