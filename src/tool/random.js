import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import { createTheme } from '@mui/material/styles';
// import MuiDrawer from '@mui/material/Drawer';

// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';

// import Typography from '@mui/material/Typography';

// import Badge from '@mui/material/Badge';
// import MenuIcon from '@mui/icons-material/Menu';

// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { mainListItems, secondaryListItems } from './listItems';
// import Canvas from '../canvas/Canvas';
import Drawer from './Tool';
import Boxi from './Boxi';


// const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Tool() {
  

  return (

  
    <ThemeProvider theme={defaultTheme}>
      <div>
        {/* <Drawer /> */}
        {/* <Boxi style = {{width:'100%'}}/> */}

      </div>
      
    </ThemeProvider>
  );
}
