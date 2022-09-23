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
import { useEffect } from "react";


const ItemDetail = ({item}) => {

  const {addItem,isInCart} = useCart();
  const {id, marca, modelo, precio,img} = item;

  
  useEffect(()=>{
       
    const keyCart = JSON.parse(localStorage.getItem("KEY_CART"));
    if (isInCart(id)) {
      const pos = keyCart.findIndex((prod)=>prod.id===id);  

      const stockInCart = item.stock - keyCart[pos].cantidad;

      setStock(stockInCart);
    }

  },[isInCart,id,item.stock])





  const [stock,setStock]=useState(item.stock);
  const [count,setCount]=useState(1);
  const [agrego,setAgrego]=useState(false);

  const [message, setMessage] = useState(null);

  const navegar = useNavigate();

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
              <Grid item xs={7}>
                <CardContent sx={{ width: 1, height:'auto',margin:"0", alignItems:'center'}}>
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
              <Grid item xs={3}>
                  <CardContent>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        id: {item.id}   
                      </Typography>
                      <Typography variant="h5" component="div">
                      {item.modelo}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {item.marca}
                      </Typography>
                  </CardContent>
                      {
                        agrego? <button className="btn" onClick={()=>navegar('/Cart')}>ir a carrito</button>
                                :stock === 0 ? <p>sin stock</p> :
                                <ItemCount onAdd={onAdd} initial={1} setStock={setStock} stock={stock} count={count} setCount={setCount}/>
                      }  
                </Grid>
          </Grid>
        </Card>
      </>
      );
}

export default ItemDetail;



