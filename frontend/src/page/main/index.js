import React, {useEffect, useState} from 'react';
import Styled from 'styled-components';
import { Box, TextField, Button, Typography } from '@mui/material'

const Wrapper = Styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

function MainPage() {
  return(
    <Wrapper>
      <Box sx={{
        width: 400,
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'white',
        border : '1px solid black'
      }}>
        <Typography>Login</Typography>
        <TextField label="Email" />
        <TextField label="PassWord"/>
        <Button variant="contained">Submit</Button>
      </Box>
    </Wrapper>
  )
}

export default MainPage;