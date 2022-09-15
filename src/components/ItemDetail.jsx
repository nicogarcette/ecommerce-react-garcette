import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount'
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Alert from "./Alert";

const ItemDetail = ({item}) => {

  const [stock,setStock]=useState(item.stock);
  const [count,setCount]=useState(1);
  const [agrego,setAgrego]=useState(false);
  const {id, marca, modelo, precio,img} = item;

  const [message, setMessage] = useState(null);
  const navegar = useNavigate();
  const {addItem} = useCart();

  const onAdd=(cantidad)=>{
    let compra ={
      id, 
      marca,
      modelo,
      precio,
      img, 
      cantidad
    }

    if (cantidad<=stock) {
        setMessage(`se ${ cantidad ===1? 'agrego' :'agregaron'} ${cantidad}  ${marca} ${modelo} al carrito`);
        setStock(stock-cantidad);
        setAgrego(true);
    }

    addItem(compra);
  }
    return (
      <>
        <Alert
        message={message && message}
        isOpen={message !==null}
        onClose={()=> setMessage(null)}
        />

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
                    image={item.img}
                    alt="isis"
                  />
                  <Typography gutterBottom variant="h5" component="div" color={"error"}>
                    ${item.precio}
                  </Typography>
                </CardContent>
              </Grid>
              {
                agrego? <Grid item xs={2}>
                          <button className="btn" onClick={()=>navegar('/Cart')}>ir a carrito</button>
                        </Grid>
                         :
                        <Grid item xs={2}>
                          <ItemCount onAdd={onAdd} initial={1} stock={stock} count={count} setCount={setCount}/>
                        </Grid>        
              }  
          </Grid>
        </Card>
      </>
      );
}

export default ItemDetail;



