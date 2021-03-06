import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

function MainPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isButtonAvailable = email && password;

  return(
    <Box sx={{
      width: 400,
      height: 400,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      border: '1px solid black',
      borderRadius: 3,
      padding: '8px',
    }}>
      <Typography sx={{ margin : '8px', marginBottom : '32px'}} variant='h4'>Login</Typography>
      <TextField sx={{ width : 300, margin : '8px'}} label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <TextField sx={{ width : 300, margin : '8px'}} label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <Button sx={{ margin : '8px'}} variant="contained" disabled={!isButtonAvailable} onClick={() => console.log(email, password)}>Submit</Button>
    </Box>
  )
}

export default MainPage;