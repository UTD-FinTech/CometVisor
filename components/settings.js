import * as React from 'react';
import { Divider, FormControl, InputLabel, Typography, Avatar, Select } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField, FormControlLabel, MenuItem, Checkbox, FormGroup } from "@mui/material";
import { borderColor, textAlign } from '@mui/system'; 
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  height: '40%',
  minHeight: '470px',
  minWeight: '470px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

const Settings = (props) => {

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          minHeight: '450px',
          minWidth: '520px',
          border: 1,
          borderColor: '#e0f2f1',
          borderWidth: 3,
          background: "linear-gradient(-152.97deg, rgba(112, 112, 112, 0.2) 0%, rgba(181, 181, 181, 0) 100%);"
        }}>
        <Typography variant="h4" style={{margin: 20, display: 'flex'}}>Profile Information</Typography>
        <Divider sx={{marginLeft: "6%", marginRight: "6%"}} />
        <div
          style = {{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            marginRight: '5%',                            
            marginLeft: '5%',
            marginTop: '0%',
            marginBottom: '5%',
            width: '95%',
          }}>
          <Box id = "profilePicture" 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '15vw',
              height: '25vh',
              marginTop: '5%' ,
          }}>
            <Avatar sx={{ width: "6vw", height: "6vw", bgcolor: "salmon", marginLeft: "10%", 
              marginRight: "10%", fontSize: "35px"}}>PP</Avatar> 
            <Button size = "small" sx={{marginTop: '5%'}}> Edit Profile Picture </Button> 
          </Box>
          <Box id = "accountInfoForm"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100vw',
              height: '45vh',
              marginLeft: '5%',
              marginRight: '5%',
              marginTop: '5%',
              marginBottom: '5%',
            }}>
            <TextField id="first" variant="outlined" label="First Name"/> 
            <TextField fullWidth id="last" variant="outlined" label="Last Name"
              sx={{marginTop: '2%'}}/>  
            <TextField fullWidth id="email" variant="outlined" label="Email"
              sx={{marginTop: '2%'}}/>   
            <TextField fullWidth id="password" variant="outlined" label="Password"
              sx={{marginTop: '2%'}}/>
            <Button variant="contained" sx={{display: 'flex', marginTop: '3%'}}>Save Changes</Button>
          </Box>    
        </div>
          {/* <Avatar sx={{ width: "5.5vw", height: "5.5vw", bgcolor: "salmon", marginLeft: "10%", marginCenter: "10%", fontSize: "35px"}}>SR</Avatar>  
          <Button size = "small"> Edit Profile Picture </Button>
        </Box>
        <Box id = "firstNameField"
          sx={{
            width: '30vw',
            height: '10vh',
            marginLeft: '32.7%',
            marginTop: '5%',
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
            height: '5vh',
            marginLeft: '32.7%',
            marginTop: '0%',
            display: 'flex'
          }}>
            <Button variant="contained" sx={{display: 'flex'}}>Save Changes</Button>
        </Box>                   */}
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
            minHeight: '350px',
            minWidth: '250px',
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
            minHeight: '350px',
            minWidth: '250px',
            border: 1,
            marginLeft: '5%',
            borderColor: '#e0f2f1',
            borderWidth: 3,
            background: "linear-gradient(-152.97deg, rgba(112, 112, 112, 0.2) 0%, rgba(181, 181, 181, 0) 100%);"
          }}>
          <Typography variant="h4" style={{margin: 20}}>Payment Methods</Typography>
          <Divider sx={{marginLeft: "6%", marginRight: "6%"}} />
          <BasicSelect sx={{display: 'flex', width: '30vw'}}></BasicSelect>
          <Box id = "addPayment"
            sx={{
              marginTop: "6%",
            }}>
            {/* <Button sx={{marginLeft: "25%", marginRight: "25%"}} variant="outlined">Add New Payment Method</Button> */}
            <div
              style = {{
                marginLeft: '30%', marginRight: '30%'
              }}>
              <Button fullWidth variant="contained" onClick={handleOpen}>Add Payment Method</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="addNewPayment"
              >
                <Box sx={style}>
                  <Typography id="modalTitle" variant="h6" component="h2">
                    Add Card Information
                  </Typography>
                  <TextField fullWidth id="cardNo" variant="outlined" label="Card Number"
                    sx={{marginTop: '3%'}} type="number" placeholder='1111 1111 1111 1111'/>
                  <TextField fullWidth id="expiration" variant="outlined" label="Expiry Date"
                    placeholder='MM/YYYY' views={['year', 'month']} sx={{marginTop: '3%'}}/>    
                  <TextField fullWidth id="cvv" variant="outlined" label="CVV" type="number"
                    placeholder='123' sx={{marginTop: '3%'}}/>
                  <TextField fullWidth id="zip" variant="outlined" label="Postal Code" type = "number"
                    placeholder='12345' sx={{marginTop: '3%'}}/>
                  <Button fullWidth variant="contained" onClick={handleOpen}
                    sx={{marginTop: '3%'}}>Add Card</Button>
                </Box>
              </Modal>
            </div>
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