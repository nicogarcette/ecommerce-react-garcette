import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';


const Item=({producto})=>{

  const navegar = useNavigate();

    return (
        <Card className='card' sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {producto.modelo}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {producto.marca}
            </Typography>
            <CardMedia
              component="img"
              height="200"
              image={producto.img}
              alt="isis"
            />
            <Typography gutterBottom variant="h5" component="div" color={"error"}>
               ${producto.precio}
            </Typography>
          </CardContent>
          <button className='btn' onClick={()=>navegar(`/detalle/${producto.id}`)}> ver mas </button>
        </Card>
      );
}

export default Item;
