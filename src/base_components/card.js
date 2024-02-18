import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, colors } from '@mui/material';
import { onDragStart, onDragEnd, onDragEnter, onDragOver } from '../tool/createjson';


export default function MultiActionAreaCard() {

    
    
  return (
    <div> 
        
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
            </CardActions>
        </Card>

    </div>
    
  );
}

// import React, { Component } from 'react'

// export class card extends Component {
//   render() {
//     return (
//       <div>card</div>
//     )
//   }
// }

// export default card