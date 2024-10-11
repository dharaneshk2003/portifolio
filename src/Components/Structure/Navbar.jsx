import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import "./Navbar.css";

import About from '../About/About';
import Skills from '../Skills/Skills';
import Project from '../Projects/Project';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';

const drawerWidth = "40%";
const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showAppBar, setShowAppBar] = React.useState(true);
  const [contentVisible, setContentVisible] = React.useState(true);
  const [appBarHeight, setAppBarHeight] = React.useState(0);
  const appBarRef = React.useRef(null);

  React.useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      if (window.pageYOffset > lastScrollY) {
        setShowAppBar(false);
      } else {
        setShowAppBar(true);
      }
      lastScrollY = window.pageYOffset;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (appBarRef.current) {
      setAppBarHeight(appBarRef.current.clientHeight);
    }
  }, [appBarRef]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavItemClick = (item) => {
    setContentVisible(false);
    setTimeout(() => {
      const element = document.getElementById(item.toLowerCase());
      const yOffset = -appBarHeight - 15;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
      setContentVisible(true);
    }, 300); // Time to match the CSS transition duration
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',backgroundColor:'white',width:'100%'}}>
      <Typography variant="h6" sx={{ my: 2,mx:2,fontWeight:800}}>
        Dharanesh Kanchustambham
      </Typography>
      <Divider />
      <List sx={{backgroundColor:'white'}}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center',backgroundColor:'white',fontSize:200,fontWeight:800}} onClick={() => handleNavItemClick(item)}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh',}}>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          backgroundColor: 'white',
          paddingTop: '0%',
          // transition: 'transform 0.3s ease-in-out',
          transform: showAppBar ? 'translateY(0)' : 'translateY(-100%)',
          display: { xs: 'block', lg: 'flex' },
          position:'fixed'
        }}
        ref={appBarRef}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              mr: 2, 
              display: { xs: 'block', lg: 'none' },
              fontSize: '2rem' // Increase icon size
            }}
          >
            <MenuIcon sx={{ fontSize: '5rem'}}/>
          </IconButton>
          <Typography
            component="p"
            sx={{ 
              color: 'black', 
              flexGrow: 1, 
              display: { xs: 'none', lg: 'block' }, 
              fontWeight: 650, 
              backgroundColor:'white',
              paddingLeft: 4,
              fontSize: { xs: '1.25rem', lg: '1.34rem' } // Adjust font size for mobile
            }}
          >
            Dharanesh Kanchustambham
          </Typography>
          <Box sx={{ display: { xs: 'none', lg: 'block' }, marginLeft: 'auto'}}>
            {navItems.map((item, index) => (
              <Button
                key={item}
                sx={{ 
                  color: 'black',
                  backgroundColor:'white',
                  fontWeight: 500, 
                  mr: index === navItems.length - 1 ? 0 : 1.5, 
                  textTransform: 'none',
                  fontSize: { xs: '1rem', lg: '1.25rem' } // Adjust font size for mobile
                }}
                onClick={() => handleNavItemClick(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
        component="main"
        sx={{ flex: 1, p: 3 }}
        className={contentVisible ? 'contentVisible' : 'contentHidden'}
      >
        <Toolbar />
        <Typography>
          {/* Main content goes here */}
          <div id="home" style={{ backgroundColor: '', marginTop: '2.5%' }}>
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Project />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </Typography>
      </Box>
    </Box>
  );
}
