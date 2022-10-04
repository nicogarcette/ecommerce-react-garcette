import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CheckOut from "./CheckOut";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import CartItem from "./CartItem";

const Cart = () =>{
    const {cart,clear,cartTotal, idCompra,setIdCompra,cartLoading} = useCart();
    const navegar = useNavigate();
    
    const back = () =>{
        setIdCompra('');
        navegar('/');
    }


    if (cartLoading) {
        return <Box className="loader center" sx={{ width: '100%'}}>
                    <CircularProgress disableShrink />
                </Box> 
    }
    return (
        <div className="container_cart">
           {idCompra ? 
                <div style={{marginTop:'19rem',textAlign:'center'}}>
                    <p> tu orden de compra es <strong>{idCompra}</strong></p>
                    <button className="btn" onClick={()=>back()}>volver</button>
                </div> 
                : cart.length > 0 ? 
                <div className="container">
                    <div>
                        <CheckOut/>
                    </div>
                    <div className="container_cart">
                        <h2>Tu carrito</h2> 
                        {cart.map((producto)=>(
                            <CartItem key={producto.id} producto={producto}/>
                        ))}
                        <button className="btn" onClick={clear}>Vaciar carrito</button> 
                        <p>TOTAL = <strong>${cartTotal() || '00'}</strong></p>
                    </div>
                </div>
                            :
                            <div className="cart_vacio">
                                <h2>Tu carrito está vacío.</h2>
                                <h3>No sabés que comprar? ¡Miles de productos te esperan!</h3>
                                <button className="btn" onClick={()=>navegar('/')}>Seguir comprando</button>
                            </div>
            }
        </div>     
    );
}
export default Cart;







