import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const pages = ['About', 'Services', 'FAQ', 'Contact', 'Login'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,1) 25%, rgba(22,121,171,1) 52%, rgba(4,4,18,1) 76%, rgba(5,5,21,1) 87%, rgba(8,8,35,1) 100%)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src='./AM.jpg' height='50px' alt='Logo' />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              marginLeft: '20px',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            ArthaMarga
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {page === 'Login' ? (
                    <Typography
                      textAlign="center"
                      component={Link}
                      to={`/${page.toLowerCase()}`}
                      style={{ marginLeft: "20px", textDecoration: 'none', color: 'inherit' }}
                    >
                      {page}
                    </Typography>
                  ) : (
                    <Typography
                      textAlign="center"
                      component={ScrollLink}
                      to={page.toLowerCase()}
                      smooth={true}
                      duration={500}
                      style={{ marginLeft: "20px", cursor: 'pointer' }}
                    >
                      {page}
                    </Typography>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ArthaMarga
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
                {page === 'Login' ? (
                  <Link
                    to={`/${page.toLowerCase()}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {page}
                  </Link>
                ) : (
                  <ScrollLink
                    to={page.toLowerCase()}
                    smooth={true}
                    duration={500}
                    style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
                  >
                    {page}
                  </ScrollLink>
                )}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
