import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount'
import Grid from '@mui/material/Grid';



const ItemDetail = ({item}) => {

  const [stock,setStock]=useState(item.stock);

  const onAdd=(cantidad)=>{
    if (cantidad<=stock) {
        alert(`se agrego al carrito ${cantidad}`);
        setStock(stock-cantidad);
    }
  }

    return (
        <Card className="cardDetail" sx={{ width: 1/2}}>
          <Grid container justifyContent="center">
              <Grid item xs={8}>
                <CardContent sx={{ width: 1/2, height:'auto'}}>
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
                    // height="200"
                    image={item.img}
                    alt="isis"
                  />
                  <Typography gutterBottom variant="h5" component="div" color={"error"}>
                    ${item.precio}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={2}>
                <ItemCount onAdd={onAdd} initial={1} stock={stock}/>
              </Grid>
          </Grid>
        </Card>
      );
}

export default ItemDetail;



