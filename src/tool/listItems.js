import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCardIcon from '@mui/icons-material/AddCard';
import AddIcon from '@mui/icons-material/Add';
import { onDragStart, onDragEnd, onDragEnter, onDragOver } from './createjson';


export const mainListItems = (
  <React.Fragment>

      <div>
        <ListItemButton id='1' draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
          <ListItemIcon>
            <AddCardIcon />
          </ListItemIcon>
          <ListItemText primary="Card" />
        </ListItemButton>
      </div>

      <div>
        <ListItemButton id='2'>
          <ListItemIcon>
            <AddCardIcon />
          </ListItemIcon>
          <ListItemText primary="button" />
        </ListItemButton>
      </div>
    
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Add component" />
    </ListItemButton>
  </React.Fragment>
);


