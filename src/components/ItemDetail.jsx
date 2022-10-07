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
  const [stock,setStock]=useState(item.stock);
  const [count,setCount]=useState(1);
  const [agrego,setAgrego]=useState(false);
  const [message, setMessage] = useState(null);
  const navegar = useNavigate();

  useEffect(()=>{
       
    const keyCart = JSON.parse(localStorage.getItem("KEY_CART"));
    if (isInCart(id)) {
      const pos = keyCart.findIndex((prod)=>prod.id===id);  

      const stockInCart = item.stock - keyCart[pos].cantidad;

      setStock(stockInCart);
    }

  },[isInCart,id,item.stock])


  const onAdd=(cantidad)=>{
    let compra ={
      id, 
      marca,
      modelo,
      precio,
      img,
      stock, 
      cantidad
    }

    if (cantidad<=stock) {
        setMessage(`se ${ cantidad ===1? 'agrego' :'agregaron'} ${cantidad}  ${marca} ${modelo} al carrito`);
        setAgrego(true);
    }

    addItem(compra);
  }

    return (
      <div>
        <Alert
        message={message && message}
        isOpen={message !==null}
        onClose={()=> setMessage(null)}
        />
        <Card className="cardDetail" sx={{width:{xs:"60%",sm:"1000px"}}}>
          <Grid container justifyContent="center">
              <Grid item xs={12} sm={7}>
                <CardContent sx={{ width: 1, height:'auto',margin:"0", alignItems:'center'}}>
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt="isis"
                  />
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={4}>
                  <CardContent>
                      <Typography variant="h5" component="div">
                      {item.marca} {item.modelo} 
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div" color={"error"}>
                        ${item.precio}
                      </Typography>
                      {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                       {item.descripcion}
                      </Typography> */}
                  </CardContent>
                      {
                        agrego? <button className="btn" onClick={()=>navegar('/Cart')}>ir a carrito</button>
                                :stock === 0 ? <p>sin stock</p> :
                                <ItemCount onAdd={onAdd} initial={1} setStock={setStock} stock={stock} count={count} setCount={setCount}/>
                      }  
                </Grid>
          </Grid>
        </Card>
      </div>
      );
}
export default ItemDetail;



