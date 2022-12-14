import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
import CartWidget from './CartWidget';
import logo from '../assets/img/logo.png';
import { NavLink } from 'react-router-dom';


const drawerWidth = 240;
const navItems = [{nombre:'catalogo', enlace:'/'},{nombre:'calzado', enlace:'/categoria/calzado'},{nombre:'indumentaria', enlace:'/categoria/indumentaria'}];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Koston
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <NavLink key={item.nombre} className='links' to={item.enlace}>
            <ListItem  disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.nombre} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" style={{display:"flex"}}>
        <Toolbar style={{justifyContent:"space-around"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <NavLink  to='/'>
              <img src={logo} style={{width:"80px",padding:"2px"}} alt="logo" />
          </NavLink>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <NavLink key={item.nombre} className='links' to={item.enlace}>
                <Button  sx={{ color: '#fff' }}>
                  {item.nombre}
                </Button>
              </NavLink>
            ))}
             <NavLink  to="./Cart">
                <Button  sx={{ color: '#fff' }}>
                  <CartWidget/>
                </Button>
              </NavLink>
          </Box>
          <Box sx={{ flexGrow: 0,  display: { sm: 'none' } }}>
            <NavLink  to="./Cart">
              <Button  sx={{ color: '#fff' }}>
                <CartWidget/>
              </Button>
            </NavLink>   
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        
        </Drawer>
      </Box>    
    </Box>
  );
}

export default DrawerAppBar;
