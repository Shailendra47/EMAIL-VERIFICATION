import React, { useState } from "react";
import "./App.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { Card, CardContent } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


//REGEX EXPRESSION
const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
export default function App() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [open, setOpen] = React.useState(false);

  const handleClick = () => { setOpen(true); };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') { return; } setOpen(false); };

  const validateAndSubmitForm = (e) => {
    e.preventDefault();
    const errors = {};

    if (!isEmail(values.email)) {errors.email = "Email is not properly written."} setErrors(errors);
    
    if (!Object.keys(errors).length) {
      alert(JSON.stringify(values, null, 2));
    }
  };
 
  const setEmail = (e) => {
    setValues((values) => ({ message: "Thank you ", ...values, email: e.target.value, success: true }));
  };
 
  return (
    <>
      <div className="container" sx={{}}>
        <Card sx={{ maxWidth: 345 }} className="card-area">
          <CardContent>
            <form onSubmit={validateAndSubmitForm}>
              <h2>EMAIL VALIDATOR </h2>
              <hr/>
              {/* TextField */}
              <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }, marginBottom: 2,  marginTop: 2}} 
              noValidate autoComplete="off">
                <div>
                  <TextField type="text" id="userEmail" label="email" value={values.email}
                  onChange={setEmail} helperText="abc123@gmail.com" variant="standard"/>{" "}
                </div>
                <div>
                  <InputAdornments />
                </div>
              </Box>
              {/* Button */}
              <Stack direction="row" spacing={2} sx={{ marginBottom: 2,  marginTop: 2 }}>
                <Button type="submit" variant="contained" onClick={handleClick} endIcon={<MarkEmailReadIcon />} >
                VERIFY
                </Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Email Address is Correct.
                  </Alert>
                </Snackbar>
               </Stack> 
              <br />
              {Object.entries(errors).map(([key, error]) => (
                <span key={`${key}: ${error}`} 
                  style={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                >{key}: {error}
                </span>
              ))}
            </form>
          </CardContent>
      </Card>
      </div>
    </>
  );
}
export function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => { event.preventDefault(); };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input id="standard-adornment-password" type={showPassword ? 'text' : 'password'} endAdornment={
                <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                </InputAdornment>
                }
            />
        </FormControl>
      </div>
    </Box>
  );
}