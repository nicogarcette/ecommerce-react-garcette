import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
;

const ItemDetail = ({item}) => {

    return (
        <Card sx={{ maxWidth: 400}}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={item.thumbnail}
              alt="mercado"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                ${item.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    )
}

export default ItemDetail;



