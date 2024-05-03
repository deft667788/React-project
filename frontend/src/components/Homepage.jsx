import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar } from '@mui/material';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';
import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
//  import Typography from '@mui/material/Typography';

const LinkInButton = styled(Link)({
  textDecoration: 'none',
  color: 'white',
  display: 'block',
  paddingLeft: '4px'
});

const ToolBarModified = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'end'
});

function Homepage () {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  //  Prevent user changing url to enter homepage
  useEffect(() => {
    if (token === null) {
      navigate('../login')
    }
  })

  return (
    <>
      {token
        ? <>
            <AppBar position='relative'>
              <ToolBarModified>
                <Button variant='contained'>
                  <LogoutIcon />
                  <LinkInButton to='../login'>
                    Logout
                  </LinkInButton>
                </Button>
              </ToolBarModified>
            </AppBar>
            This is Homepage!!!
            <Outlet />
          </>
        : navigate('../login')
      }
    </>
  )
}

export default Homepage;
