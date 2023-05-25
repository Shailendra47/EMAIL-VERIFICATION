import React, { useState } from "react";
import "./App.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { Card, CardContent } from "@mui/material";


const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
 
export default function App() {
  const [values, setValues] = useState({ email: "" });
  const [errors, setErrors] = useState({});
 
  const validateAndSubmitForm = (e) => {
    e.preventDefault();
    const errors = {};

    if (!isEmail(values.email)) {
      errors.email = "Email is not properly written.";
    }
    setErrors(errors);
 
    if (!Object.keys(errors).length) {
      alert(JSON.stringify(values, null, 2));
    }
  };
 
  const setEmail = (e) => {
    setValues((values) => ({ ...values, email: e.target.value }));
  };
 
  return (
    <>
      <div className="container">
        <Card sx={{ maxWidth: 345 }} className="card-area">
          <CardContent>
            <form onSubmit={validateAndSubmitForm}>
              <h2>EMAIL VALIDATOR </h2>
              <hr/>
              <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
              <div>
                <TextField type="text" id="userEmail" label="EMAIL" value={values.email}
                onChange={setEmail} helperText="abc123@gmail.com" variant="standard"/>{" "}
              </div>
              </Box>
                <Stack direction="row" spacing={2}>
                <Button type="submit" variant="contained" endIcon={<MarkEmailReadIcon />}> VERIFY </Button>
              </Stack>
              <br />
              {Object.entries(errors).map(([key, error]) => (
                <span key={`${key}: ${error}`} 
                  style={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                >
                  {key}: {error}
                </span>
              ))}
            </form>
          </CardContent>
      </Card>
      </div>
    </>
  );
}