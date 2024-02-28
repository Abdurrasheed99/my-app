import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Canvas from '../canvas/Canvas';

function Boxi() {
  return (
    <div >
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />       
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Canvas/>
        </Box>
      </Box>
    </div>
  )
}

export default Boxi


