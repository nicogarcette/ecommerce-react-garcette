import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


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
            <CardMedia
              component="img"
              height="140"
              image={producto.img}
              alt="isis"
            />
            <Typography gutterBottom variant="h5" component="div" color={"error"}>
               ${producto.precio}
            </Typography>
          </CardContent>
        </Card>
      );
}

export default Item;
