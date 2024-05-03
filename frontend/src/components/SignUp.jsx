import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchPOST } from './fetch.js';

const SignWindowBorder = styled('div')({
  padding: '24px',
  borderRadius: '8px',
  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
});

const MyHomeIcon = styled(HomeIcon)({
  margin: '0 auto',
  fontSize: '60px'
});

function SignUp () {
  const navigate = useNavigate();

  async function SignUpAccount (event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const myEmail = data.get('email');
    const myName = data.get('name');
    const myPassword = data.get('password');

    //  One of the field is entered, no action
    if (myEmail === '' || myPassword === '') {
      return;
    }

    const bodyInfo = { email: myEmail, password: myPassword, name: myName };
    const ret = await fetchPOST('admin/auth/register', bodyInfo);
    if (ret.status === 200) {
      const token = (await ret.json()).token;
      localStorage.setItem('token', token);
      localStorage.setItem('Email', myEmail);
      localStorage.setItem('name', myName);
      navigate('../homepage');
    } else if (ret.status === 400) {
      console.log('Invalid input');
    }
  }

  return (
    <>
      <Container
        component='form'
        maxWidth='xs'
        onSubmit={SignUpAccount}
        sx={ { mt: 25 } }
      >
        <SignWindowBorder>
          <MyHomeIcon
            color="primary"
          />
          <Typography
            variant='h5'
            sx={ { mt: 1, textAlign: 'center' } }
          >
            Sign up
          </Typography>
          <Typography
            variant='subtitle2'
            sx={ { mt: 2, mb: 2 } }
          >
            Enter your name
          </Typography>
          <TextField
            id='outlined-basic'
            name='name'
            label='Name'
            variant='outlined'
            fullWidth
          />
          <Typography
            variant='subtitle2'
            sx={ { mt: 2, mb: 2 } }
          >
            Enter your Email
          </Typography>
          <TextField
            id='outlined-basic'
            name='email'
            label='Email'
            variant='outlined'
            fullWidth
          />
          <Typography
            variant='subtitle2'
            sx={ { mt: 2, mb: 2 } }
          >
            Enter your Password
          </Typography>
          <TextField
            id='outlined-basic'
            name='password'
            label='Password'
            variant='outlined'
            type='password'
            fullWidth
          />
          <Button
            type='submit'
            variant='contained'
            sx={ { mt: 4, mb: 2 } }
            fullWidth
          >
            Sign up
          </Button>
          <Link to='../login' variant='body1' style={ { paddingRight: '10px', textAlign: 'end' } }>
            Back to login in
          </Link>
        </SignWindowBorder>
      </Container>
    </>
  )
}

export default SignUp;
