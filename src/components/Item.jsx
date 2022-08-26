import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Item=({producto})=>{
  
    return (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Calzado id:{producto.id}   
            </Typography>
            <Typography variant="h5" component="div">
              {producto.modelo}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {producto.marca}
            </Typography>
            <Typography variant="body2">
                {producto.img}
                <br />
            </Typography>
            <Typography gutterBottom variant="h5" component="div" color={"error"}>
               ${producto.precio}
            </Typography>
          </CardContent>
        </Card>
      );
}

export default Item;
