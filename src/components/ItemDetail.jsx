import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount'


const ItemDetail = ({item}) => {

  const [stock,setStock]=useState(item.stock);

  const onAdd=(cantidad)=>{
    if (cantidad<=stock) {
        alert(`se agrego al carrito ${cantidad}`);
        setStock(stock-cantidad);
    }
  }

    return (
        <Card sx={{ width: 300 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Calzado id:{item.id}   
            </Typography>
            <Typography variant="h5" component="div">
              {item.modelo}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {item.marca}
            </Typography>
            <CardMedia
              component="img"
              height="140"
              image={item.img}
              alt="isis"
            />
            <Typography gutterBottom variant="h5" component="div" color={"error"}>
               ${item.precio}
            </Typography>
          </CardContent>
          <ItemCount onAdd={onAdd} initial={1} stock={stock}/>
        </Card>
      );
}

export default ItemDetail;



