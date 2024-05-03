import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/system';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';

const LinkInButton = styled(Link)({
  textDecoration: 'none',
  color: 'white',
  display: 'block',
  paddingLeft: '4px'
});

const Start = () => {
  return (
    <>
      <Container sx={ { mt: 5, ml: 5 } }>
        <Button variant='contained'>
          <LinkInButton
            to={'/login'}
          >
            Go to Login
          </LinkInButton>
        </Button>
        <Button variant='contained' sx={ { ml: 5 } }>
          <LinkInButton
            to={'./signup'}
          >
            Go to SignUp
          </LinkInButton>
        </Button>
        <Button variant='contained' sx={ { ml: 5 } }>
          <LinkInButton
            to={'./homepage'}
          >
            Go to HomePage
          </LinkInButton>
        </Button>
      </Container>
    </>
  );
}

function App () {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/homepage' element={<Homepage/>}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
