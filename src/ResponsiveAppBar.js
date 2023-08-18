import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Button,
  Tooltip,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import BuildIcon from '@mui/icons-material/Build'; // Import the BuildIcon

const pages = ['Cjenik', 'Kalendar'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  // Handle opening the navigation menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // Handle closing the navigation menu
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Handle clicking the phone icon to make a call
  const handleCallButtonClick = () => {
    window.location.href = 'tel:+385 97/777 9296'; // Replace with your phone number
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#00BCD4' }}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'left',
          }}
        >
          {/* Logo and Icon */}
          <Box sx={{ display: 'flex', alignItems: 'left', gap: '2px' }}>
            <BuildIcon sx={{ fontSize: '2rem' }} />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              href="/"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'black',
                textDecoration: 'none',
              }}
              textAlign="center"
            >
              Pero-Term
            </Typography>
          </Box>

          {/* Navigation Menu (for smaller screens) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              edge="start"
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
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
              {/* Navigation links */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    variant="h6"
                    component={Link}
                    to={`/${page.toLowerCase()}`}
                    noWrap
                    sx={{
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: '#333',
                      textDecoration: 'none',
                    }}
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Home link (for smaller screens) */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
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
            Home
          </Typography>

          {/* Navigation buttons (for larger screens) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase()}`}
                sx={{ my: 2, mx: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Phone number with call icon */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Nazovite nas">
              <IconButton onClick={handleCallButtonClick} sx={{ p: 0 }}>
                <PhoneIcon /> 
              </IconButton>+385 97/777 9296
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
